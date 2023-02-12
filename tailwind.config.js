/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
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
  plugins: [],
};
