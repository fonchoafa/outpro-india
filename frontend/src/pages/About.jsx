import Section from "../components/Section.jsx";

const team = [
  { 
    name: "Founder Name", 
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  },
  { 
    name: "Co-founder Name", 
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
  },
  { 
    name: "Lead Designer", 
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
];

export default function About() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold mb-4">About Outpro.India</h1>
        <p className="text-slate-600 max-w-2xl">
          Outpro.India was founded to help businesses build a credible,
          high-performing digital presence. We combine innovative technology
          with creative expertise to deliver exceptional results for our clients
          across industries.
        </p>
      </Section>

      <Section className="grid md:grid-cols-3 gap-6 bg-brand-light rounded-2xl p-8">
        {[
          [
            "Mission", 
            "To empower businesses with cutting-edge digital solutions that drive growth, enhance brand visibility, and create meaningful connections with their audiences."
          ],
          [
            "Vision", 
            "To become India's most trusted digital transformation partner, recognized for innovation, excellence, and delivering measurable results that shape the future of businesses."
          ],
          [
            "Values", 
            "Integrity, Innovation, Customer-Centricity, Excellence, and Collaboration — these core values guide everything we do and define our commitment to our clients."
          ],
        ].map(([title, text]) => (
          <div key={title}>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-8">Leadership & Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={m.image} 
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}