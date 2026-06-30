// api/health.js
export default function handler(req, res) {
  res.status(200).json({ 
    status: "OK", 
    message: "Outpro.India API is running",
    timestamp: new Date().toISOString()
  });
}