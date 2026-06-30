import express from "express";
import cors from "cors";
import { connectDB } from "../backend/config/db.js";
import servicesRoutes from "../backend/routes/services.js";
import portfolioRoutes from "../backend/routes/portfolio.js";
import testimonialsRoutes from "../backend/routes/testimonials.js";
import contactRoutes from "../backend/routes/contact.js";

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*",
  credentials: true
}));
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Outpro.India API is running",
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/api/services", servicesRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/contact", contactRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Connect to MongoDB
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
}