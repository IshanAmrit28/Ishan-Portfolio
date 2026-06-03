import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter object using the default SMTP transport
// You will need to replace the user and pass with your actual gmail credentials
// Note: You must use an App Password if you have 2FA enabled on Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.EMAIL_USER, // list of receivers (you)
      subject: `New Portfolio Contact Message from ${name}`, 
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, 
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
