import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// // Default Route
// app.get("/", (req, res) => {
//   res.send("Waitly Server is Running 🚀");
// });

// app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();


app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});