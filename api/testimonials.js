// api/testimonials.js
import { connectDB } from "../backend/config/db.js";
import testimonialsRoutes from "../backend/routes/testimonials.js";

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
  
  return testimonialsRoutes(req, res);
}