import express from "express";
import Visitor from "../models/Visitors.js";

const router = express.Router();

router.get("/", async (req, res) => {
try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
    visitor = new Visitor({ count: 0 });
    }

    visitor.count += 1;
    await visitor.save();

    res.json({ visitors: visitor.count });
}
catch (err) {
    console.error("Error updating visitor count:", err);
    res.status(500).json({ error: "Server error" });
}
});

router.get("/reset", async (req, res) => {
try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
    visitor = new Visitor({ count: 0 });
    }

    visitor.count = 1550;
    await visitor.save();
    res.json({ message: "Visitor counter reset", visitors: visitor.count });
} catch (err) {
    console.error("Error resetting visitor count:", err);
    res.status(500).json({ error: "Server error" });
}
});
export default router;
