import { useState } from "react";

/**
 * Mailchimp embedded form (no JS API key needed — uses Mailchimp's public
 * form-action endpoint). Replace MAILCHIMP_FORM_ACTION with your real
 * Audience's embedded form action URL (Audience > Signup forms > Embedded form).
 * It looks like:
 * https://<dc>.list-manage.com/subscribe/post?u=<u>&id=<id>
 */
const MAILCHIMP_FORM_ACTION = "https://YOUR-DC.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mailchimp's embedded form posts via a normal HTML form submit (CORS-safe,
  // no API key exposed client-side). We let the browser handle the POST.
  return (
    <div className="bg-brand-secondary rounded-2xl px-8 py-10 text-center text-white">
      <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
      <p className="text-slate-300 mb-6 text-sm">
        Get occasional updates on new projects, case studies, and digital trends.
      </p>

      {submitted ? (
        <p className="text-brand-accent font-medium">Thanks for subscribing!</p>
      ) : (
        <form
          action={MAILCHIMP_FORM_ACTION}
          method="post"
          target="_blank"
          onSubmit={() => setSubmitted(true)}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full text-brand-secondary"
          />
          {/* Honeypot field Mailchimp expects, keep hidden */}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_YOUR_U_YOUR_ID" tabIndex="-1" defaultValue="" />
          </div>
          <button
            type="submit"
            className="bg-brand-accent text-brand-secondary font-semibold px-6 py-3 rounded-full hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
