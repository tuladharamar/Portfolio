// Absolutely! Since you’re a junior developer, I’ll make this simple, professional, and easy to understand using Node.js + Express. This backend will handle your contact form submissions.

// We'll cover:

// Setting up Express server

// Creating a POST route for /contact

// Sending form submissions via Email using NodeMailer (or just logging for now)

// Allowing your React frontend to communicate using CORS

// 1️⃣ Install Dependencies
// npm init -y
// npm install express cors nodemailer dotenv

// express → backend framework

// cors → allow React frontend to call API

// nodemailer → send emails

// dotenv → store secrets like your email password

// 2️⃣ Project Structure
// backend/
// ├─ server.js
// ├─ .env
// 3️⃣ .env File (Keep Private)
// PORT=5000
// EMAIL_USER=youremail@example.com
// EMAIL_PASS=yourEmailPasswordOrAppPassword
// RECEIVER_EMAIL=youremail@example.com

// Tip: Use an App Password if using Gmail, not your main password.

// 4️⃣ server.js
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Contact Route
// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "Please fill all fields" });
//   }

//   try {
//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Message sent successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// 5️⃣ Update Your React Frontend

// In your Contact page, update handleSubmit:

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert(data.message);
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       alert(data.error || "Something went wrong");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Failed to send message");
//   }
// };
// ✅ Features

// Full React + Express contact workflow

// Sends email using NodeMailer

// Handles errors gracefully

// Validates fields

// ⚡ Optional Enhancements

// Use SMTP services like SendGrid or Mailgun instead of Gmail

// Add rate-limiting to prevent spam

// Save messages to a database (MongoDB/PostgreSQL)

// Deploy backend to Render, Vercel, or Heroku

// If you want, I can also write a production-ready backend folder structure with:

// /routes

// /controllers

// /utils/nodemailer.js

// .env config

// …which looks just like a real-world professional backend project.

// Do you want me to do that?