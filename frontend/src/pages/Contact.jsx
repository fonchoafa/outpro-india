import { useState } from "react";
import Section from "../components/Section.jsx";
import { submitContactForm } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Section className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
      <p className="text-slate-500 mb-10">Tell us about your project and we'll get back to you.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name" placeholder="Full name" required value={form.name} onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3"
        />
        <input
          name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3"
        />
        <input
          name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3"
        />
        <input
          name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3"
        />
        <textarea
          name="message" placeholder="Your message" required rows={5} value={form.message} onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && <p className="text-green-600 text-sm">Thanks! We'll be in touch soon.</p>}
        {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
      </form>
    </Section>
  );
}
