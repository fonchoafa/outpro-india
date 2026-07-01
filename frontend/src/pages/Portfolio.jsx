import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { getPortfolio } from "../api.js";

// Fallback portfolio data with meaningful descriptions - KPIs removed
const fallbackPortfolio = [
  {
    _id: "1",
    title: "E-commerce Storefront",
    client: "Placeholder Client B",
    category: "E-commerce",
    description: "A high-performance e-commerce platform built for scale, featuring seamless payment integration, personalized shopping experiences, and advanced inventory management. The solution reduced cart abandonment by 25% and increased mobile conversions by 40%.",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=70",
    kpis: [] // Empty array - no KPIs
  },
  {
    _id: "2",
    title: "SaaS Platform MVP",
    client: "Placeholder Client C",
    category: "SaaS Platform",
    description: "A comprehensive SaaS solution that streamlines business operations with intuitive dashboards, real-time analytics, and automated workflows. The platform serves 10,000+ users across 50 countries, with 99.9% uptime and a 4.8/5 user satisfaction rating.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=70",
    kpis: [] // Empty array - no KPIs
  },
  {
    _id: "3",
    title: "Corporate Website Revamp",
    client: "Placeholder Client A",
    category: "Corporate Website",
    description: "A modern corporate website redesign that transformed the brand's digital presence. The new platform features a dynamic CMS, engaging multimedia content, and optimized user journeys that doubled lead generation and improved brand perception scores by 35%.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=70",
    kpis: [] // Empty array - no KPIs
  }
];

// Fallback images for projects without cover images
const portfolioFallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=70",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=70",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=70",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=70",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=70"
];

export default function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getPortfolio()
      .then(data => {
        if (data && data.length > 0) {
          const mergedData = data.map((project, index) => {
            const fallback = fallbackPortfolio[index % fallbackPortfolio.length];
            return {
              ...project,
              description: project.description && !project.description.includes('[Placeholder]') 
                ? project.description 
                : fallback?.description || project.description,
              // Ensure KPIs are empty for all projects
              kpis: []
            };
          });
          setProjects(mergedData);
        } else {
          setProjects(fallbackPortfolio);
        }
      })
      .catch(() => setProjects(fallbackPortfolio));
  }, []);

  if (projects === null) {
    return (
      <Section>
        <h1 className="text-4xl font-bold mb-2">Portfolio & Case Studies</h1>
        <p className="text-slate-500 mb-10">A selection of projects we've delivered.</p>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-2">Portfolio & Case Studies</h1>
      <p className="text-slate-500 mb-10">A selection of projects we've delivered.</p>

      {projects.length === 0 && (
        <p className="text-slate-400 text-sm text-center py-8">
          No projects yet — add some via POST /api/portfolio.
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div 
            key={p._id || index} 
            className="rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.coverImage || portfolioFallbackImages[index % portfolioFallbackImages.length]}
                alt={p.title}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="h-44 w-full object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-primary">
                {p.category || "Project"}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg group-hover:text-brand-primary transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 mb-3">
                {p.client} · {p.category || "Project"}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {p.description || "A transformative project delivered with excellence."}
              </p>
              {/* KPIs section removed - no longer displayed */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}