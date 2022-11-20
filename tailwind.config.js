/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0d9488",
        dark: "#0f172a",
        like: "#FF0066",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
