/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2B2235", soft: "#5A4E68", muted: "#9B8FAD" },
        midnight: "#0b1020",
        paper: "#fffaf0",
        cloud: "#f6f1e8",
        electric: "#1f7bff",
        violet: "#7c3aed",
        sun: "#ffb545",
        rose: { DEFAULT: "#F7C5C0", deep: "#F0A39B" },
        peach: { DEFAULT: "#FDE5D4", deep: "#F9C9A8" },
        mint: { DEFAULT: "#C7EAD9", deep: "#A3D9BF" },
        lavender: { DEFAULT: "#DDD6F3" },
        sky: { DEFAULT: "#C9E8F5" },
        butter: { DEFAULT: "#FEF3C7" },
        cream: { DEFAULT: "#FDFAF8" },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(9, 17, 34, 0.12)",
        glow: "0 18px 70px rgba(31, 123, 255, 0.22)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
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
