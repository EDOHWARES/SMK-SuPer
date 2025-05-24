import express from "express";
import multer from "multer";
import pibg from "../models/pibg.js";
import dotenv from "dotenv";
import sendPaymentStatusMail from "../utils/mailer.js";

dotenv.config();
const pibgRoutes = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

/**
 * @desc Parent uploads payment
 * @route POST /api/pibg
 */
pibgRoutes.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const {
      email,
      parentName,
      childName,
      class: studentClass,
      amount,
      date,
    } = req.body;
    const receipt = req.file?.path;

    // console.log(childName, studentClass, amount, date, receipt);

    if (
      !email ||
      !parentName ||
      !childName ||
      !studentClass ||
      !amount ||
      !date ||
      !receipt
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const payment = await pibg.create({
      email,
      parentName,
      childName,
      class: studentClass,
      amount,
      date,
      receipt,
    });

    res.json({ message: "Payment submitted", payment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting payment" });
  }
});

/**
 * @desc Treasurer views all payments
 * @route GET /api/pibg
 */
pibgRoutes.get("/", async (req, res) => {
  try {
    const payments = await pibg.find().sort({ date: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching payments" });
  }
});

/**
 * @desc Treasurer verifies or updates status of a payment
 * @route PATCH /api/pibg/:id
 */
pibgRoutes.patch("/:id", async (req, res) => {
  try {
    const payment = await pibg.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    payment.status = req.body.status || payment.status;
    await payment.save();

    console.log(payment.email);

    // Send email
    if (payment.email) {
      try {
        await sendPaymentStatusMail({
          to: payment.email,
          parentName: payment.parentName,
          studentName: payment.childName,
          status: payment.status,
        });
      } catch (mailErr) {
        console.error("Error sending email:", mailErr);
      }
    }

    res.json({ message: "Payment status updated", payment });
  } catch (err) {
    res.status(500).json({ message: "Error updating payment" });
  }
});

/**
 * @desc Admin downloads all payments (CSV-style data)
 * @route GET /api/pibg/report
 */
pibgRoutes.get("/report", async (req, res) => {
  try {
    const payments = await pibg.find();
    const csv = [
      ["Child Name", "Class", "Amount", "Date", "Status"],
      ...payments.map((p) => [
        p.childName,
        p.class,
        p.amount,
        p.date.toISOString().split("T")[0],
        p.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=payment_report.csv"
    );
    res.setHeader("Content-Type", "text/csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: "Failed to generate report" });
  }
});

export default pibgRoutes;
