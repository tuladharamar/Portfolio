require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// Nodemailer
const transporter = nodemailer.createTransport({
 service:'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  family:4,
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
});
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP VERIFY FAILED:", err);
  } else {
    console.log("SMTP READY");
  }
});

// Routes
app.get('/', (req, res) => res.send('API is running'));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }

  try {
    console.log(' Contact form received:', email);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);

    res.status(200).json({success:true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error("===== EMAIL ERROR =====");
    console.error(error);
    console.error("=======================");

    res.status(500).json({
      success: false,
      error: error.message,
      code: error.code
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});