import Section from "../components/Section.jsx";

const team = [
  { name: "Founder Name", role: "CEO & Founder" },
  { name: "Co-founder Name", role: "CTO" },
  { name: "Lead Designer", role: "Head of Design" },
];

export default function About() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold mb-4">About Outpro.India</h1>
        <p className="text-slate-600 max-w-2xl">
          [Placeholder] Outpro.India was founded to help businesses build a credible,
          high-performing digital presence. Replace this with the real company story.
        </p>
      </Section>

      <Section className="grid md:grid-cols-3 gap-6 bg-brand-light rounded-2xl">
        {[
          ["Mission", "[Placeholder mission statement]"],
          ["Vision", "[Placeholder vision statement]"],
          ["Values", "[Placeholder core values]"],
        ].map(([title, text]) => (
          <div key={title}>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-8">Leadership & Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4" />
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
