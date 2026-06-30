import { useEffect, useState } from "react";
import Section from "../components/Section.jsx";
import { getPortfolio } from "../api.js";

export default function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getPortfolio().then(setProjects).catch(() => setProjects([]));
  }, []);

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-2">Portfolio & Case Studies</h1>
      <p className="text-slate-500 mb-10">A selection of projects we've delivered.</p>

      {projects?.length === 0 && (
        <p className="text-slate-400 text-sm">No projects yet — add some via POST /api/portfolio.</p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {projects?.map((p) => (
          <div key={p._id} className="rounded-xl overflow-hidden border border-slate-100">
            <div className="h-44 bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
              [project image]
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-500 mb-2">{p.client} · {p.category}</p>
              <p className="text-sm text-slate-600">{p.description}</p>
              {p.kpis?.length > 0 && (
                <div className="flex gap-4 mt-3">
                  {p.kpis.map((k, i) => (
                    <div key={i} className="text-center">
                      <p className="font-bold text-brand-primary">{k.value}</p>
                      <p className="text-xs text-slate-500">{k.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
