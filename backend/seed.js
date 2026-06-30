// Run with: node seed.js
// Populates the database with placeholder content so the frontend has data to render.
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Service from "./models/Service.js";
import Portfolio from "./models/Portfolio.js";
import Testimonial from "./models/Testimonial.js";

dotenv.config();

const services = [
  { title: "Web Development", slug: "web-development", shortDescription: "Custom, scalable websites built for performance.", fullDescription: "[Placeholder] Full detail copy for Web Development service.", order: 1 },
  { title: "UI/UX Design", slug: "ui-ux-design", shortDescription: "Pixel-perfect, conversion-focused design.", fullDescription: "[Placeholder] Full detail copy for UI/UX Design service.", order: 2 },
  { title: "Digital Marketing", slug: "digital-marketing", shortDescription: "SEO, content, and growth strategy.", fullDescription: "[Placeholder] Full detail copy for Digital Marketing service.", order: 3 },
];

const portfolio = [
  { title: "Project Alpha", client: "Acme Corp", category: "Corporate Website", description: "[Placeholder] Project description.", featured: true, kpis: [{ label: "Conversion lift", value: "+32%" }] },
  { title: "Project Beta", client: "Globex", category: "E-commerce", description: "[Placeholder] Project description.", featured: true, kpis: [{ label: "Load time", value: "1.8s" }] },
  { title: "Project Gamma", client: "Initech", category: "SaaS Platform", description: "[Placeholder] Project description.", featured: false },
];

const testimonials = [
  { clientName: "Jane Doe", company: "Acme Corp", role: "Marketing Director", quote: "Outpro.India transformed our digital presence.", featured: true },
  { clientName: "John Smith", company: "Globex", role: "CEO", quote: "Professional, fast, and reliable from start to finish.", featured: true },
];

async function seed() {
  await connectDB();
  await Promise.all([Service.deleteMany(), Portfolio.deleteMany(), Testimonial.deleteMany()]);
  await Service.insertMany(services);
  await Portfolio.insertMany(portfolio);
  await Testimonial.insertMany(testimonials);
  console.log("✅ Seeded placeholder data");
  mongoose.connection.close();
}

seed();
