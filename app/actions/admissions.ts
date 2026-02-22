// app/actions/admissions.ts

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

export async function sendMobileOtp(mobile: string) {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY; 
    if(!apiKey) return { success: false, message: "SMS API Key missing in backend." };

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const message = `Dear Parent, your OTP for EuroKids Sector 86 Admission Enquiry is ${otp}. Please do not share this with anyone.`;
    
    const response = await fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&route=q&message=${encodeURIComponent(message)}&language=english&flash=0&numbers=${mobile}`, {
      method: 'GET'
    });

    const data = await response.json();

    if(data.return) {
      const hash = crypto.createHash('sha256').update(otp + mobile + process.env.SMTP_PASS).digest('hex');
      return { success: true, hash, message: "OTP sent successfully to your mobile via SMS!" };
    } else {
      console.error("Fast2SMS API Error Response:", data);
      
      if (data.status_code === 999) {
        console.log(`\n\n========================================`);
        console.log(`🔔 [TEST MODE] FAST2SMS NEEDS ₹100 RECHARGE`);
        console.log(`📱 Mobile Number: ${mobile}`);
        console.log(`🔑 YOUR OTP IS: ${otp}`);
        console.log(`========================================\n\n`);

        const hash = crypto.createHash('sha256').update(otp + mobile + process.env.SMTP_PASS).digest('hex');
        return { 
          success: true, 
          hash, 
          message: "API needs ₹100 Recharge. Check VS Code Terminal for your OTP!" 
        };
      }

      return { success: false, message: "Failed to send OTP. SMS Gateway error." };
    }
  } catch (error) {
    console.error("OTP send failed", error);
    return { success: false, message: "Server error while sending OTP." };
  }
}

export async function verifyMobileOtpAction(mobile: string, otp: string, hash: string) {
  const computedHash = crypto.createHash('sha256').update(otp + mobile + process.env.SMTP_PASS).digest('hex');
  if (computedHash === hash) {
    return { success: true };
  }
  return { success: false, message: "Invalid OTP. Please check and try again." };
}

async function sendThankYouSMS(mobile: string, childName: string) {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY; 
    if(!apiKey) return; 

    const message = `Dear Parent, your admission form for ${childName} is successfully submitted at EuroKids Sector 86. Our team will connect with you soon. Have a great day!`;
    
    const response = await fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&route=q&message=${encodeURIComponent(message)}&language=english&flash=0&numbers=${mobile}`, {
      method: 'GET'
    });
    
    const data = await response.json();
    
    if(data.return) {
        console.log(`✅ Thank You SMS sent successfully to ${mobile}`);
    } else if(data.status_code === 999) {
       console.log(`\n🔔 [TEST MODE] SMS that would have been sent: "${message}"\n`);
    } else {
       console.error("❌ Thank You SMS failed:", data);
    }

  } catch (error) {
    console.error("SMS sending failed", error);
  }
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
          <tr><td><strong>Child's Date of Birth</strong></td><td>${formData.childDob}</td></tr>
          <tr><td><strong>Mobile Number</strong></td><td>${formData.mobile} (Verified via SMS OTP)</td></tr>
          <tr><td><strong>Email</strong></td><td>${formData.email || 'Not Provided'}</td></tr>
          <tr><td><strong>Selected Program</strong></td><td>${formData.program}</td></tr>
        </table>
      `
    });

    if(formData.email) {
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
    }

    await sendThankYouSMS(formData.mobile, formData.childName);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to submit form." };
  }
}