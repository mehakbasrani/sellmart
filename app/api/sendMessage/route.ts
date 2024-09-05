import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'; 

export async function POST(req: Request) {
  try {
    const { email, userEmail, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: email,
      subject: 'New message from buyer',
      text: message,
    };

    await transporter.sendMail(mailOptions);
    // console.log('Email sent successfully');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    // console.error('Error sending email:', error);

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
