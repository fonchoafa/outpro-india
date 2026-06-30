// api/portfolio.js
import express from "express";
import { connectDB } from "../backend/config/db.js";
import portfolioRoutes from "../backend/routes/portfolio.js";

const app = express();

app.use(express.json());

let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error.message);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }
  next();
});

app.use("/api/portfolio", portfolioRoutes);

export default app;