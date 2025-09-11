import express from "express";
const router = express.Router();

// Donations are now static (UPI + QR). No DB logging needed.
router.get("/", (req, res) => {
  res.json({ 
    message: "Donations are handled via static UPI ID & QR code. No server logging enabled." 
  });
});

export default router;
