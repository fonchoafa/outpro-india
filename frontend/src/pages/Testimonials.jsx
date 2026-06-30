import { useEffect, useState } from "react";
import Section from "../components/Section.jsx";
import { getTestimonials } from "../api.js";

export default function Testimonials() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getTestimonials().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-2">Client Testimonials</h1>
      <p className="text-slate-500 mb-10">Hear what our clients have to say.</p>

      {items?.length === 0 && (
        <p className="text-slate-400 text-sm">No testimonials yet — add some via POST /api/testimonials.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {items?.map((t) => (
          <blockquote key={t._id} className="bg-brand-light rounded-xl p-6">
            {t.videoUrl ? (
              <div className="h-40 bg-slate-200 rounded mb-4 flex items-center justify-center text-xs text-slate-500">
                [video testimonial]
              </div>
            ) : (
              <p className="text-slate-700 mb-4">"{t.quote}"</p>
            )}
            <footer className="text-sm font-semibold">
              {t.clientName} {t.role && `— ${t.role}`} {t.company && `, ${t.company}`}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
