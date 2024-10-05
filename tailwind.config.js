/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF822F",
        textInactived: "#1D1C1C",
        textActived: "#581B0C",
        "secondary-color": "#B9DA13",
      },
    },
  },
  plugins: [],
};
