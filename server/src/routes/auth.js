import { Router } from 'express';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
dotenv.config();
const router = Router();
const admin = {
  email: process.env.ADMIN_EMAIL,
  passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'changeme123', 10)
};

router.get('/login', async (req, res) => {
  const { email, password } = req.query; // take credentials from URL
  if (!email || !password) {
      console.log("Got:", req.query.email, req.query.password);
    return res.status(400).json({ message: "Email and password required" });
  }
  console.log("Expected:", admin.email, process.env.ADMIN_PASSWORD);
  console.log("Got:", email, password);
  if (email !== admin.email) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
  
  res.json({ token });
  

});


export default router;