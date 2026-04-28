require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

// const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT;

// ====================== MIDDLEWARE ======================
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// ====================== MONGO CONNECTION ======================
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1);
//   });

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
  res.send('API is running');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // 1. Save to MongoDB
    // const newContact = new Contact({ name, email, phone, message });
    // await newContact.save();

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
        <p><strong>Phone:</strong>${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Sent at: ${new Date().toLocaleString()}</small>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // 3. Return proper JSON (THIS WAS MISSING)
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
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Frontend allowed: ${process.env.FRONTEND_URL}`);
});