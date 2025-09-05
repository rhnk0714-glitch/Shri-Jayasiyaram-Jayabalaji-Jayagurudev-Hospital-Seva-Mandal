// server/src/routes/donations.js
import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// Submit a donation
router.post("/", async (req, res) => {
  try {
    const { donorName, donorPhone, donorAddress, amount, donorPan, donorEmail, notes} = req.body;

    if (!donorName || !donorPhone || !donorAddress || !amount) {
      return res.status(400).json({ message: "Name, Phone, Address, and Amount are required" });
    }

    const donation = new Donation({
      donorName,
      donorPhone,
      donorAddress,
      donorPan,
      donorEmail,
      notes,
      amount,
      status: "created"
    });

    await donation.save();
    console.log("✅ Donation saved:", donation);

    return res.status(201).json({ message: "Donation saved successfully", donation });
  } catch (err) {
    console.error("❌ Error saving donation:", err);
    return res.status(500).json({ message: "Server error" });
  }
});


// 🛠 TEMP ADMIN ROUTE – For manual checking of donations
// Access: GET /api/donations/all
// NOTE: Don't expose this in frontend. Use only in browser/Postman.
router.get("/all", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 }); // latest first
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching donations", error: err.message });
  }
});

export default router;
