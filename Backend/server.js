require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');   // ← New import

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Routes
app.get('/', (req, res) => res.send('API is running'));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }

  try {
    console.log('📧 Contact form received from:', email);

    const { data, error } = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,   // Change this later
      to: [process.env.EMAIL_USER],                   // Your email address
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Sent at: ${new Date().toLocaleString()}</small>
      `
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }

    console.log('✅ Email sent successfully! ID:', data.id);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error("===== EMAIL ERROR =====");
    console.error(error);
    console.error("=======================");

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
