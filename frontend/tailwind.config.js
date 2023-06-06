/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        winebg: "url('/assets/background/winebackground.png')",
      },
    },
    colors: {
      primary: "#202020",
      secondary: "#FFFFFF",
      tertiary: "#FAE496",
    },
  },
  plugins: [],
};
