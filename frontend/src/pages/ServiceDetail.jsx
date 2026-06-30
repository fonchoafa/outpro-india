import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { getService } from "../api.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(undefined);

  useEffect(() => {
    getService(slug).then(setService).catch(() => setService(null));
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
    </Section>
  );
}
