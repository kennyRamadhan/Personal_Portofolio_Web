export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5",   // Indigo
          secondary: "#14B8A6", // Teal
          accent: "#F59E0B",    // Amber
          bgLight: "#F5F7FF",
          bgDark: "#1F2937"
        },
        animation: {
          fadeInUp: "fadeInUp 0.8s ease forwards"
        },
        keyframes: {
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" }
          }
        }
      },
    },
    plugins: [],
  };
  