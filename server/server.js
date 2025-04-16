import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/booking.js";
import authRoutes from "./routes/auth.js";

import seedRooms from "./config/seedRooms.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(morgan('dev')); // Logs: method, URL, status, response time

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Check for the "seed" argument
if (process.argv.includes('--seed')) {
  seedRooms().then(() => {
    console.log('Seeding completed. Exiting...');
    process.exit(); // Exit the process after seeding
  });
}

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