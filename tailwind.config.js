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
              secondary: "#91291c",
              accent: "white",
            },
            fontFamily: {
              primary: ["soleil", "sans-serif"],
            },
          },
        },
        {
          name: "mark",
          extend: {
            colors: {
              primary: "#eab308",
              secondary: "#18181b",
              accent: "red",
            },
          },
        },
        {
          name: "woodsy",
          extend: {
            colors: {
              primary: "#414833",
              secondary: "#2C2C2C",
              accent: "#C2CDAA",
            },
            fontFamily: {
              primary: ["bd-supper", "sans-serif"],
            },
          },
        },
        {
          name: "desert",
          extend: {
            colors: {
              primary: "#778C8E",
              secondary: "#d0d8d8",
              accent: "#C2CDAA",
              dark: "#49473E",
              black: "#212524",
            },
            fontFamily: {
              primary: ["p22-mackinac-pro", "serif"],
            },
          },
        },
      ],
    }),
  ],
};
