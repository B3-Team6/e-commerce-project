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
      keyframes: {
        fade: {
          from: { opacity: 0.4 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
