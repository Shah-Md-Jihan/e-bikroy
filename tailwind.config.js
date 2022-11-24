/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        eBikroyTheme: {
          primary: "#149777",
          secondary: "#0074ba",
          accent: "#ffc800",
          neutral: "#191D24",
          "base-100": "#2A303C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
