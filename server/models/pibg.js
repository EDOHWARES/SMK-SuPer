import mongoose from "mongoose";

const pibgSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  parentName: String,
  childName: String,
  class: String,
  amount: Number,
  date: Date,
  receipt: String,
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "verified", "rejected"],
  },
});

const Pibg = mongoose.model("Pibg", pibgSchema);
export default Pibg;
