// test-send-email.js
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function test() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Test email from getaiiq',
      text: 'If you see this, email sending works.',
    });
    console.log('Message sent:', info.messageId, info.response);
  } catch (err) {
    console.error('Send error:', err);
    process.exitCode = 1;
  }
}

if (require.main === module) test();
