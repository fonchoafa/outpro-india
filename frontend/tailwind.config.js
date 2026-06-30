/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder brand palette — swap with real Outpro.India brand kit
        brand: {
          primary: "#1A56DB",
          secondary: "#0F172A",
          accent: "#F59E0B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
