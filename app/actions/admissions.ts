"use server"

import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOtpEmail(email: string) {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    await transporter.sendMail({
      from: `"EuroKids Admissions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "EuroKids Admission - Verify your Email (OTP)",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #183385;">EuroKids Sector 86, Faridabad</h2>
          <p>Hello,</p>
          <p>Please use the following OTP to verify your email address for the admission form.</p>
          <h1 style="color: #ec008c; letter-spacing: 5px;">${otp}</h1>
          <p>If you did not request this, please ignore this email.</p>
        </div>
      `
    });

    const hash = crypto.createHash('sha256').update(otp + email + process.env.SMTP_PASS).digest('hex');
    
    return { success: true, hash, message: "OTP sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send OTP. Try again." };
  }
}

export async function verifyOtpAction(email: string, otp: string, hash: string) {
  const computedHash = crypto.createHash('sha256').update(otp + email + process.env.SMTP_PASS).digest('hex');
  if (computedHash === hash) {
    return { success: true };
  }
  return { success: false, message: "Invalid OTP" };
}

export async function submitAdmissionForm(formData: any) {
  try {
    await transporter.sendMail({
      from: `"EuroKids Website" <${process.env.SMTP_USER}>`,
      to: "eurokid.gfbd@gmail.com",
      bcc: "mr.deepanshujoshi@gmail.com",
      subject: `New Admission Enquiry - ${formData.childName}`,
      html: `
        <h3>New Admission Enquiry Received</h3>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td><strong>Parent's Name</strong></td><td>${formData.parentName}</td></tr>
          <tr><td><strong>Child's Name</strong></td><td>${formData.childName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${formData.email} (Verified)</td></tr>
          <tr><td><strong>Mobile Number</strong></td><td>${formData.mobile}</td></tr>
          <tr><td><strong>Selected Program</strong></td><td>${formData.program}</td></tr>
        </table>
      `
    });

    await transporter.sendMail({
      from: `"EuroKids Sector 86" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: "Thank you for contacting EuroKids Sector 86, Faridabad!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #183385;">Hello ${formData.parentName},</h2>
          <p>Thank you for showing interest in EuroKids PreSchool & Day Care, Sector 86, Summer Palm.</p>
          <p>We have successfully received your enquiry for the <strong>${formData.program}</strong> program for your child, <strong>${formData.childName}</strong>.</p>
          <p>Our admissions team will contact you shortly on ${formData.mobile}.</p>
          <br/>
          <p>Best Regards,<br/><strong>EuroKids Admissions Team</strong></p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to submit form." };
  }
}