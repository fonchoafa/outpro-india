// api/test.js
export default function handler(req, res) {
  res.status(200).json({ 
    message: "Test endpoint is working!",
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    headers: req.headers
  });
}