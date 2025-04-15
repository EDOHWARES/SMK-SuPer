import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/booking.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// // Default Route
app.get("/", (req, res) => {
  res.send("SMK Server is Running 🚀");
});

app.use("/api/auth", authRoutes);
app.use('/api/bookings', bookingRoutes);

// Connect to MongoDB
connectDB();


app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});