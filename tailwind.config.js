/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const customStyle = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262626",
        light: "#fff",
      },
    },
  },
  plugins: [customStyle],
};
