/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#495567",
        accent1: "#939CAA",
        accent2: "#E5ECF4",
        accent3: "#FCB72B",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      space_mono: "Space Mono",
    },
  },
  plugins: [],
};
