/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Anton'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        round: ["'Baloo 2'", "cursive"],
        brand: ["'Pacifico'", "cursive"],
      },
      colors: {
        toon: {
          pink: "#E36FA9",
          "pink-panel": "#EC8DBE",
          red: "#D8443B",
          "red-panel": "#E26A62",
          amber: "#F2A63C",
          "amber-panel": "#F6BC63",
          cream: "#FFF3DA",
          ink: "#2A1726",
        },
        habibi: {
          purple: "#4a1d6e",
          pink: "#e6398b",
          gold: "#f5a623",
        },
      },
      boxShadow: {
        toon: "6px 6px 0 0 rgba(42,23,38,0.45)",
        "toon-sm": "4px 4px 0 0 rgba(42,23,38,0.4)",
        "toon-white": "5px 5px 0 0 rgba(255,255,255,0.9)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
