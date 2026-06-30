import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import servicesRoutes from "./routes/services.js";
import portfolioRoutes from "./routes/portfolio.js";
import testimonialsRoutes from "./routes/testimonials.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// Updated CORS configuration for production
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint for Render
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Outpro.India API is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/", (req, res) => res.json({ status: "Outpro.India API running" }));

app.use("/api/services", servicesRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/contact", contactRoutes);

// Error handling middleware
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

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

export default app;