/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A009A", // roxo topo
        accent: "#ff007a",  // rosa botões/CTA
        bgCard: "#fef6ff",  // aquele lilás claro dos cards
      },
      borderRadius: {
        xl: 16,
        "2xl": 24,
      },
    },
  },
  plugins: [],
};
