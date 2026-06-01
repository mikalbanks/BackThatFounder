/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        midnight: "#0b1020",
        paper: "#fffaf0",
        cloud: "#f6f1e8",
        electric: "#1f7bff",
        violet: "#7c3aed",
        mint: "#15c58b",
        sun: "#ffb545",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(9, 17, 34, 0.12)",
        glow: "0 18px 70px rgba(31, 123, 255, 0.22)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
