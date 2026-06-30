import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { getService } from "../api.js";

// Fallback data for individual services
const fallbackServiceData = {
  "web-development": {
    title: "Web Development",
    fullDescription: "We build modern, high-performance websites that combine stunning design with robust functionality. From corporate websites to complex web applications, our development team crafts digital experiences that engage users and drive results. Using the latest technologies and best practices, we deliver responsive, SEO-optimized solutions that scale with your business. Our comprehensive development process includes custom CMS integration, e-commerce functionality, API development, and ongoing maintenance to ensure your website remains secure, fast, and up-to-date.",
    shortDescription: "Custom, scalable websites built for performance."
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    fullDescription: "Our design process puts users at the center, creating intuitive interfaces that delight and convert. We combine research, prototyping, and testing to craft seamless user experiences across all devices. From wireframes to pixel-perfect designs, we ensure every element serves a purpose and contributes to your business goals. Our services include user research, information architecture, interaction design, visual design, usability testing, and design systems to create cohesive brand experiences that drive engagement and conversions.",
    shortDescription: "Pixel-perfect, conversion-focused design."
  },
  "digital-marketing": {
    title: "Digital Marketing",
    fullDescription: "Drive measurable growth with our comprehensive digital marketing strategies. We leverage SEO, content marketing, social media, and analytics to build your brand presence and attract qualified leads. Our data-driven approach ensures continuous optimization, helping you achieve sustainable growth and maximize ROI. From search engine optimization and pay-per-click advertising to content creation and social media management, we develop tailored strategies that connect you with your target audience and convert them into loyal customers.",
    shortDescription: "SEO, content, and growth strategy."
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(undefined);

  useEffect(() => {
    getService(slug)
      .then(setService)
      .catch(() => {
        // If API fails, use fallback data
        const fallback = fallbackServiceData[slug];
        setService(fallback || null);
      });
  }, [slug]);

  if (service === undefined) return <Section>Loading…</Section>;
  if (service === null)
    return (
      <Section>
        <p>Service not found.</p>
        <Link to="/services" className="text-brand-primary underline">Back to Services</Link>
      </Section>
    );

  return (
    <Section>
      <Link to="/services" className="text-sm text-brand-primary mb-6 inline-block">← Back to Services</Link>
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-slate-600 max-w-2xl">{service.fullDescription || service.shortDescription}</p>
      
      {/* Optional: Add additional sections for better visual hierarchy */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Why Choose Us?</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>✓ Experienced team of experts</li>
            <li>✓ Customized solutions tailored to your needs</li>
            <li>✓ Proven track record of success</li>
            <li>✓ Ongoing support and maintenance</li>
          </ul>
        </div>
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
          <p className="text-sm text-slate-600 mb-4">
            Let's discuss how our {service.title} services can help your business grow.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}