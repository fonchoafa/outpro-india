// api/index.js
import express from "express";
import cors from "cors";
import { connectDB } from "../backend/config/db.js";
import servicesRoutes from "../backend/routes/services.js";
import portfolioRoutes from "../backend/routes/portfolio.js";
import testimonialsRoutes from "../backend/routes/testimonials.js";
import contactRoutes from "../backend/routes/contact.js";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*",
  credentials: true
}));
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

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Outpro.India API is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Test endpoint is working!",
    timestamp: new Date().toISOString()
  });
});

app.get("/api", (req, res) => {
  res.json({ 
    message: "Outpro.India API is running",
    endpoints: ["/api/test", "/api/health", "/api/services", "/api/portfolio", "/api/testimonials", "/api/contact"]
  });
});

app.use("/api/services", servicesRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ 
    error: 'API route not found',
    path: req.path
  });
});

export default app;
