export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-slate-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Outpro.India</h3>
          <p className="text-sm text-slate-400">
            Modern, high-performance digital solutions for ambitious businesses.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white">All Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>hello@outpro.india</li>
            <li>+91 00000 00000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 text-center text-xs py-4 text-slate-500">
        © {new Date().getFullYear()} Outpro.India. All rights reserved.
      </div>
    </footer>
  );
}
