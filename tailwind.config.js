/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "iranYekanRegular": ['var(--IYRFont)'],
        "iranYekan": ['var(--IRFont)'],
        "strenuous": ['var(--STFont)'],
      },
      colors: {
        "doldor_orange": "#F37151",
        "green_light": "#e5fce3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
    }
  },
  darkMode: "class",
  plugins: [],
};
