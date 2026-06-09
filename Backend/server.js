require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 5000;

// ====================== MIDDLEWARE ======================
app.use(express.json({ limit: '10kb' })); // Limit payload size

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL.split(',').map(o => o.trim())
      : [];

    // Allow requests with no origin (like mobile apps, Postman)
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

// ====================== NODEMAILER TRANSPORTER ======================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  // Optional: better security & deliverability
  tls: {
    rejectUnauthorized: true
  }
});

// Test transporter on startup (optional but recommended)
transporter.verify((error) => {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Email transporter is ready ✅');
  }
});

// ====================== ROUTES ======================
app.get('/', (req, res) => {
  res.send('Portfolio Contact API is running 🚀');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      error: 'Name, email, and message are required fields.'
    });
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    const formattedPhone = phone?.trim() ? phone.trim() : 'Not provided';
    const formattedMessage = message.replace(/\n/g, '<br>');

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
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
        <small>Sent at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })}</small>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // More user-friendly error for common Gmail issues
    let errorMsg = 'Failed to send message. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMsg = 'Email authentication failed. Check your credentials.';
    }

    res.status(500).json({
      success: false,
      error: errorMsg
    });
  }
});

// ====================== SERVER START ======================
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Frontend allowed: ${process.env.FRONTEND_URL || 'All origins (dev)'}`);
});