/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#7B583D",
        grey: "rgba(0, 0, 0, 0.5);",
        black: "#0F0F1B",
        active: "#D9D9D9",
      },
      borderRadius: {
        primary: "10px",
        secondary: "20px",
      },
      boxShadow: {
        primary: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        activeShadow: "2px 2px 6px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        primary: "14px",
        secondary: "16px",
        large: "20px",
      },
      fontFamily : {
        primary: ["'DM Sans'", "sans-serif"]
      }
    },
  },
  plugins: [],
};
