// src/routes/visitors.js
import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
let count = 0;

if (fs.existsSync("counter.json")) {
    count = JSON.parse(fs.readFileSync("counter.json", "utf8")).count;
}

count++;

fs.writeFileSync("counter.json", JSON.stringify({ count }));

res.json({ visitors: count });
});

// ✅ ES module default export
export default router;
