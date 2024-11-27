/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent1: "#939CAA",
        accent2: "#E5ECF4",
        accent3: "#FCB72B",
        accent4: "#F2F5F9",
      },
    },
    fontFamily: {
      space_mono: "Space Mono",
    },
  },
  plugins: [],
};
