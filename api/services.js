// api/services.js
import express from "express";
import { connectDB } from "../backend/config/db.js";
import servicesRoutes from "../backend/routes/services.js";

const app = express();

app.use(express.json());

// Connect to MongoDB
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error.message);
    }
  }
  
  // Apply the routes
  return servicesRoutes(req, res);
}