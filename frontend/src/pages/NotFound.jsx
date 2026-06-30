import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

export default function NotFound() {
  return (
    <Section className="text-center py-32">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-slate-500 mb-6">Page not found.</p>
      <Link to="/" className="text-brand-primary underline">Back to home</Link>
    </Section>
  );
}
