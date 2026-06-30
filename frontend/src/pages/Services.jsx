import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { getServices } from "../api.js";

export default function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    getServices().then(setServices).catch(() => setServices([]));
  }, []);

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-2">Our Services</h1>
      <p className="text-slate-500 mb-10">Comprehensive digital solutions for every stage of your growth.</p>

      {services === null && <p>Loading…</p>}
      {services?.length === 0 && (
        <p className="text-slate-400 text-sm">
          No services in the database yet — add some via POST /api/services.
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {services?.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="border border-slate-100 rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-2">{s.title}</h2>
            <p className="text-sm text-slate-500">{s.shortDescription}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
