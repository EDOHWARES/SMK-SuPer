import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import generateReceiptPDF from "./genReceiptPDF.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
  service: "gmail", // or your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendPaymentStatusMail = async ({
  to,
  parentName,
  studentName,
  amt,
  status,
  paymentRecordId
}) => {
  const schoolName = "SMK SURIA PERDANA";
  const schoolAddress =
    "Jalan Parit Semarang, 86400 Parit Raja, Johor Darul Ta'zim, Malaysia";
  // const adminName = "";

  let statusColor = "black";
  if (status.toLowerCase() === "verified") statusColor = "green";
  else if (status.toLowerCase() === "rejected") statusColor = "red";
  else if (status.toLowerCase() === "pending") statusColor = "orange";

  const pdfPath = generateReceiptPDF({
    parentName,
    studentName,
    amount: amt,
    status,
    paymentRecordId
  });

  const serverUrl = process.env.SERVER_URL; 

  const mailOptions = {
    from: `"${schoolName}" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Payment Receipt - Status Updated",
    html: `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #eee; border-radius: 8px;">
          <div style="text-align: center;">
            <img src="cid:schoollogo" alt="${schoolName} Logo" style="max-height: 50px;" />
            <h2 style="margin: 10px 0;">${schoolName}</h2>
            <p>${schoolAddress}</p>
          </div>
  
          <hr style="margin: 20px 0;" />
  
          <p>Dear <strong>${parentName}</strong>,</p>
  
            <p>
            This is to confirm that the Pibg payment status for your child <strong>${studentName}</strong> has been:
            <span style="font-size: 18px; font-weight: bold; color: ${statusColor}; text-transform: uppercase; margin-left: 5px;">
                ${status}
            </span>
            </p>
        
          <p>Thank you for your cooperation and prompt response.</p>

            <p>
            You can download the receipt for this payment by clicking the button below:
            </p>

            <div style="text-align: center; margin: 20px 0;">
            <a href="${serverUrl}/receipts/${studentName}-receipt-SMK-RCP${paymentRecordId}.pdf" 
                style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
                Download Receipt
            </a>
            </div>
  
          <br />
  
          <p style="margin-top: 40px;">Sincerely,</p>
          <p><strong></strong><br />School Administrator</p>
        </div>
      `,
    attachments: [
      {
        filename: "logo.png",
        path: path.join(__dirname, "../assets/logo.png"),
        cid: "schoollogo", 
      },
      {
        filename: `${studentName}-receipt-SMK-RCP${paymentRecordId}.pdf`,
        path: pdfPath,
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};

export default sendPaymentStatusMail;
