import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? "text-brand-primary" : "text-slate-600 hover:text-brand-primary"
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Get a Quote
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-brand-secondary mb-1.5" />
          <div className="w-6 h-0.5 bg-brand-secondary mb-1.5" />
          <div className="w-6 h-0.5 bg-brand-secondary" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => setOpen(false)} className="text-slate-700">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
