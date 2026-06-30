import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { getServices, getPortfolio, getTestimonials } from "../api.js";

export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => setServices([]));
    getPortfolio(true).then(setProjects).catch(() => setProjects([]));
    getTestimonials(true).then(setTestimonials).catch(() => setTestimonials([]));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Building digital experiences that drive business growth
            </h1>
            <p className="text-slate-200 text-lg mb-8">
              Outpro.India helps ambitious companies design, build, and scale modern digital products.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-brand-accent text-brand-secondary font-semibold px-6 py-3 rounded-full hover:opacity-90">
                Get in touch
              </Link>
              <Link to="/portfolio" className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10">
                View our work
              </Link>
            </div>
          </motion.div>
          <div className="bg-white/10 rounded-2xl overflow-hidden h-72">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&h=600&q=70"
              alt="Outpro.India digital products showcase"
              fetchpriority="high"
              decoding="async"
              width="900"
              height="600"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <Section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["150+", "Projects Delivered"],
          ["50+", "Happy Clients"],
          ["8+", "Years Experience"],
          ["20+", "Industry Verticals"],
        ].map(([num, label]) => (
          <div key={label}>
            <p className="text-3xl font-bold text-brand-primary">{num}</p>
            <p className="text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </Section>

      {/* Services overview */}
      <Section>
        <h2 className="text-3xl font-bold mb-2">What we do</h2>
        <p className="text-slate-500 mb-10">A full spectrum of digital services under one roof.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {(services.length ? services : placeholderServices).map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="border border-slate-100 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured portfolio */}
      <Section>
        <h2 className="text-3xl font-bold mb-2">Featured work</h2>
        <p className="text-slate-500 mb-10">A glimpse into projects we're proud of.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {(projects.length ? projects : placeholderProjects).map((p, i) => (
            <div key={p._id || i} className="rounded-xl overflow-hidden border border-slate-100">
              <img
                src={p.coverImage || homeFallbackImages[i % homeFallbackImages.length]}
                alt={p.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="h-40 w-full object-cover bg-slate-100"
              />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials preview */}
      <Section>
        <h2 className="text-3xl font-bold mb-10">What clients say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(testimonials.length ? testimonials : placeholderTestimonials).map((t, i) => (
            <blockquote key={t._id || i} className="bg-brand-light rounded-xl p-6">
              <p className="text-slate-700 mb-4">"{t.quote}"</p>
              <footer className="text-sm font-semibold">{t.clientName} — {t.company}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <Newsletter />
      </Section>
    </>
  );
}

const homeFallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=70", // analytics dashboard
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=70", // ecommerce/shopping
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400&q=70", // code/SaaS
];

const placeholderServices = [
  { slug: "web-development", title: "Web Development", shortDescription: "Custom, scalable websites built for performance." },
  { slug: "ui-ux-design", title: "UI/UX Design", shortDescription: "Pixel-perfect, conversion-focused design." },
  { slug: "digital-marketing", title: "Digital Marketing", shortDescription: "SEO, content, and growth strategy." },
];

const placeholderProjects = [
  { title: "Project Alpha", category: "Corporate Website" },
  { title: "Project Beta", category: "E-commerce" },
  { title: "Project Gamma", category: "SaaS Platform" },
];

const placeholderTestimonials = [
  { clientName: "Jane Doe", company: "Acme Corp", quote: "Outpro.India transformed our digital presence." },
  { clientName: "John Smith", company: "Globex", quote: "Professional, fast, and reliable." },
];
