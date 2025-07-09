import express from "express";
import multer from "multer";
import Pibg from "../models/pibg.js";
import dotenv from "dotenv";
import sendPaymentStatusMail from "../utils/mailer.js";
import fs from "fs";

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
      form,
      class: studentClass,
      amount,
      date,
    } = req.body;
    const receipt = req.file?.path;

    // Validate required fields
    if (
      !email ||
      !parentName ||
      !childName ||
      !form ||
      !studentClass ||
      !amount ||
      !date ||
      !receipt
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate `form` and `class` values
    const validForms = ["1", "2", "3", "4", "5"];
    const validClasses = ["ELIT", "MUSYTARI", "UTARID", "URANUS", "ZUHRAH", "ZUHAL"];
    if (!validForms.includes(form)) {
      return res.status(400).json({ message: "Invalid form value." });
    }
    if (!validClasses.includes(studentClass)) {
      return res.status(400).json({ message: "Invalid class value." });
    }

    const payment = await Pibg.create({
      email,
      parentName,
      childName,
      form,
      class: studentClass,
      amount,
      date,
      receipt,
    });

    res.status(201).json({ message: "Payment submitted successfully", payment });
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
    const payments = await Pibg.find().sort({ date: -1 });
    res.status(200).json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching payments" });
  }
});

/**
 * @desc Treasurer verifies or updates status of a payment
 * @route PATCH /api/pibg/:id
 */
pibgRoutes.patch("/:id", async (req, res) => {
  try {
    const payment = await Pibg.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.status = req.body.status || payment.status;
    await payment.save();

    // Send email notification
    if (payment.email) {
      try {
        await sendPaymentStatusMail({
          to: payment.email,
          parentName: payment.parentName,
          studentName: payment.childName,
          amt: payment.amount,
          status: payment.status,
          paymentRecordId: payment._id,
        });
      } catch (mailErr) {
        console.error("Error sending email:", mailErr);
      }
    }

    res.status(200).json({ message: "Payment status updated successfully", payment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating payment" });
  }
});

/**
 * @desc Admin deletes a payment
 * @route DELETE /api/pibg/:id
 */
pibgRoutes.delete('/:id', async (req, res) => {
  try {
    const payment = await Pibg.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    // Delete the uploaded receipt file if it exists
    if (payment.receipt) {
      fs.unlink(payment.receipt, (err) => {
        if (err) {
          console.error('Error deleting receipt file:', err);
        }
      });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting payment' });
  }
});

/**
 * @desc Admin downloads all payments (CSV-style data)
 * @route GET /api/pibg/report
 */
pibgRoutes.get("/report", async (req, res) => {
  try {
    const payments = await Pibg.find();
    const csv = [
      ["Parent Name", "Child Name", "Form", "Class", "Amount", "Date", "Status"],
      ...payments.map((p) => [
        p.parentName,
        p.childName,
        p.form,
        p.class,
        p.amount,
        p.date.toISOString().split("T")[0],
        p.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    res.setHeader("Content-Disposition", "attachment; filename=payment_report.csv");
    res.setHeader("Content-Type", "text/csv");
    res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to generate report" });
  }
});

export default pibgRoutes;
