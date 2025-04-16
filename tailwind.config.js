/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#222121",
        primary: "#83ED49",
        "primary-dark": "#56a02f",
        "secondary-color": "#B9DA13",
        "terceary-color": "#FF822F",
        "text-primary-dark": "#2f4858",
        "btn-cancel-dark": "#F50428",

        "background-card": "#797878",
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
        inria: ["Inria Sans", "sans-serif"],
      },
      screens: {
        mobile: "360px",
      },
    },
  },
  plugins: [],
};
