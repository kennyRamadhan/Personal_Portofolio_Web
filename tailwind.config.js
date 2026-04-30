/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: "#4338CA",  // indigo-700
          subtle:  "#EEF2FF",  // indigo-50
        },
        accent: {
          DEFAULT: "#F59E0B",  // amber-500
          subtle:  "#FEF3C7",  // amber-100
        },
        // Status
        success: {
          DEFAULT: "#15803D",  // green-700
          subtle:  "#DCFCE7",  // green-100
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Typography scale (only custom sizes; rest use Tailwind defaults)
        "hero-h1":     ["44px", { lineHeight: "1.1",  letterSpacing: "-0.8px", fontWeight: 500 }],
        "section-h2":  ["28px", { lineHeight: "1.2",  letterSpacing: "-0.5px", fontWeight: 500 }],
        "card-h3":     ["17px", { lineHeight: "1.3",  fontWeight: 500 }],
        "stat":        ["30px", { lineHeight: "1",    letterSpacing: "-0.6px", fontWeight: 500 }],
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
