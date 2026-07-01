// Run with: node seed.js
// Populates the database with launch-ready service copy and realistic
// placeholder portfolio/testimonial content.
//
// IMPORTANT: The portfolio and testimonials below are PLACEHOLDER content
// written to look realistic for design/demo purposes. Replace clientName,
// company, quote, project details, and KPIs with real data before treating
// this site as fully live to the public.
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Service from "./models/Service.js";
import Portfolio from "./models/Portfolio.js";
import Testimonial from "./models/Testimonial.js";

dotenv.config();

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Fast, scalable websites and web apps built to grow with your business.",
    fullDescription:
      "We design and build custom websites and web applications using modern frameworks like React and Node.js. Every project is built with performance, SEO, and maintainability in mind - from marketing sites to full-stack platforms with databases and APIs. We handle everything from initial architecture to deployment, so you get a production-ready product, not just a prototype.",
    order: 1,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription: "Clean, conversion-focused design that puts your users first.",
    fullDescription:
      "Good design isn't just decoration - it's how users decide to trust and act on your product. We create wireframes, prototypes, and polished interfaces grounded in real usability principles, tailored to how your specific customers browse, decide, and convert. Every design decision is made to reduce friction and support your business goals.",
    order: 2,
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDescription: "SEO, content, and growth strategy to get your business found.",
    fullDescription:
      "A great product still needs to be discovered. We help businesses grow their organic visibility through technical SEO, content strategy, and structured growth planning. Our approach is data-driven - we track what's actually moving the needle and adjust, rather than guessing at tactics.",
    order: 3,
  },
];

// PLACEHOLDER - replace with real project details before public launch
const portfolio = [
  {
    title: "Corporate Website Revamp",
    client: "Placeholder Client A",
    category: "Corporate Website",
    description:
      "[Placeholder] Redesigned and rebuilt a legacy corporate website into a fast, modern, mobile-first experience.",
    featured: true,
    kpis: [{ label: "Conversion lift", value: "+32%" }],
  },
  {
    title: "E-commerce Storefront",
    client: "Placeholder Client B",
    category: "E-commerce",
    description:
      "[Placeholder] Built a custom online storefront with optimized checkout flow and fast page loads.",
    featured: true,
    kpis: [{ label: "Load time", value: "1.8s" }],
  },
  {
    title: "SaaS Platform MVP",
    client: "Placeholder Client C",
    category: "SaaS Platform",
    description:
      "[Placeholder] Designed and developed an MVP for an early-stage SaaS product, from concept to launch.",
    featured: false,
  },
];
const testimonials = [
  {
    clientName: "Amara Chen",
    company: "Northlight Studio",
    role: "Marketing Director",
    quote: "Outpro.India transformed our digital presence from start to finish. The team understood our brand instantly and delivered ahead of schedule.",
    featured: true,
  },
  {
    clientName: "Daniel Okafor",
    company: "Vantage Retail Group",
    role: "CEO",
    quote: "Professional, fast, and reliable — exactly what we needed. Our new site has already paid for itself in the first quarter.",
    featured: true,
  },
  {
    clientName: "Priya Nair",
    company: "Solace Wellness",
    role: "Founder",
    quote: "Working with Outpro.India felt like having an in-house dev team. Clear communication, solid code, and a design that actually converts.",
    featured: false,
  },
];

async function seed() {
  await connectDB();
  await Promise.all([Service.deleteMany(), Portfolio.deleteMany(), Testimonial.deleteMany()]);
  await Service.insertMany(services);
  await Portfolio.insertMany(portfolio);
  await Testimonial.insertMany(testimonials);
  console.log("Seeded services (launch-ready) + portfolio/testimonials (PLACEHOLDER - replace before going live)");
  mongoose.connection.close();
}

seed();