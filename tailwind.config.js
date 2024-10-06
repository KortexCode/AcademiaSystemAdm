/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF822F",
        "secondary-color": "#B9DA13",
        textBody: "#302D2D",
        "front-background": "#030303",
        textTitle: "#FFAF02",
        textInactived: "#1D1C1C",
        textActived: "#581B0C",
        textCard: "#302D2D",
      },
      boxShadow: {
        shadowTop: "0 0 4px 2px",
      },
      fontFamily: {
        inria: ['"Inria Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
