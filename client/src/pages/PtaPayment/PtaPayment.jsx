import React, { useState } from "react";
import axios from "axios";

const PtaPayment = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    class: "",
    amount: "",
    date: "",
    receipt: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, receipt: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.parentName ||
      !formData.childName ||
      !formData.class ||
      !formData.amount ||
      !formData.date ||
      !formData.receipt
    ) {
      alert("Please fill in all fields and upload a receipt.");
      return;
    }

    const api_url = import.meta.env.VITE_API_URL;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    setLoading(true);
    try {
      await axios.post(`${api_url}/pibg`, data);
      alert("✅ Payment submitted successfully");
      setFormData({
        parentName: "",
        childName: "",
        class: "",
        amount: "",
        date: "",
        receipt: null,
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-xl  mx-auto mt-35 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        PTA Payment Submission
      </h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parent's Name
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Child's Name
          </label>
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Class
          </label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount (MYR)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Receipt
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-500"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Payment"}
        </button>
      </form>
    </section>
  );
};

export default PtaPayment;

// // BACKEND - paymentController.js
// const Payment = require('../models/paymentModel');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// exports.submitPayment = async (req, res) => {
//   try {
//     const { childName, class: childClass, amount, date } = req.body;
//     const receipt = req.file?.path;

//     const payment = await Payment.create({
//       parentId: req.user.id,
//       childName,
//       class: childClass,
//       amount,
//       date,
//       receiptUrl: receipt,
//     });

//     await transporter.sendMail({
//       to: req.user.email,
//       subject: 'Payment Confirmation',
//       text: `Hi, your payment for ${childName} has been received and is under review.`,
//     });

//     res.status(201).json(payment);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateStatus = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
//     res.json(payment);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getReport = async (req, res) => {
//   try {
//     const payments = await Payment.find();
//     const csv = payments.map(p => `${p.childName},${p.class},${p.amount},${p.status}`).join('\n');
//     res.attachment('report.csv').send(csv);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // BACKEND - paymentRoutes.js
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const auth = require('../middleware/auth');

// router.post('/', auth, upload.single('receipt'), paymentController.submitPayment);
// router.patch('/:id', auth, paymentController.updateStatus);
// router.get('/report', auth, paymentController.getReport);

// module.exports = router;
