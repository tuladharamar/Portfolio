require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT;

// ====================== MIDDLEWARE ======================
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = process.env.FRONTEND_URL ;  
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


// ====================== NODEMAILER TRANSPORTER ======================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ====================== CONTACT ROUTE ======================
app.get('/', (req, res) => {
  res.send('Portfolio Contact API is running');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  try {
    const formattedPhone = phone ? phone : 'Not provided';
    const formattedMessage = message.replace(/\n/g, '<br>');

    // 2. Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${formattedPhone}</p>
        <p><strong>Message:</strong></p>
        <p>${formattedMessage}</p>
        <hr>
        <small>Sent at: ${new Date().toLocaleString()}</small>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// ====================== SERVER START ======================
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(`Frontend allowed: ${process.env.FRONTEND_URL}`);
});