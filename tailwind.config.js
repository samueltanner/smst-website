/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-paper": "url('/img/grid-paper.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        soleil: ["soleil", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {
            primary: "red",
          },
        },
      },
      themes: [
        {
          name: "default",
          extend: {
            colors: {
              primary: "#18181b",
            },
          },
        },
        {
          name: "mark",
          extend: {
            colors: {
              primary: "#581c87",
            },
          },
        },
        {
          name: "woodsy",
          extend: {
            colors: {
              primary: "#7F836E",
            },
          },
        },
      ],
    }),
  ],
};
