import express from "express";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { featured } = req.query;
    const filter = featured ? { featured: true } : {};
    const items = await Portfolio.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Project not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await Portfolio.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
