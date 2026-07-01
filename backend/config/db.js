// backend/config/db.js
import mongoose from 'mongoose';

let cachedConnection = null;

export async function connectDB() {
  if (cachedConnection) {
    console.log('✅ Using cached database connection');
    return cachedConnection;
  }

  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined');
    return null;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    cachedConnection = conn;
    console.log('✅ MongoDB connected successfully');
    return conn;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    return null;
  }
}