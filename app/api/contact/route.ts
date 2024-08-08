import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Log received data
  console.log('Received data:', { name, email, message });

  // Log environment variables
  console.log('Environment Variables:', {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  });

  if (!name || !email || !message) {
    console.log('Validation failed');
    return new NextResponse('Bad Request', { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${process.env.GMAIL_USER}>`,
    replyTo: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return new NextResponse('Message sent successfully', { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
