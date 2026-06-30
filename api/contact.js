// api/contact.js
import { connectDB } from "../backend/config/db.js";
import contactRoutes from "../backend/routes/contact.js";

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
  
  return contactRoutes(req, res);
}