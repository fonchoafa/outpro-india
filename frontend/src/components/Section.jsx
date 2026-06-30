export default function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}
