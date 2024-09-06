/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#ebfaf7",
        heroColor: "#0891b2",
        blue: "#90caf9",
        darkblue: "#151269",
        blackpurple: "#6b21a8",
        darkpurple: "#7e22ce",
        purple: "#9333ea",
        lightpurple: "#a855f7",
        faintpurple: "#c084fc",
      },
    },
  },
  plugins: [],
};
