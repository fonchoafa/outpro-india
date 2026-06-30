// api/index.js
import express from "express";
import cors from "cors";

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

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Test endpoint is working!",
    timestamp: new Date().toISOString()
  });
});

// Root API route
app.get("/api", (req, res) => {
  res.json({ 
    message: "Outpro.India API is running",
    endpoints: ["/api/test", "/api/health"]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'API route not found',
    path: req.path
  });
});

// Export the handler
export default async function handler(req, res) {
  try {
    return app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}