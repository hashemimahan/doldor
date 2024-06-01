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
        "doldor_orange": "#FF6E5C",
        "green_light": "#e5fce3",
        "doldor_header_bg": "#C4F2E1",
        "doldor_icon": "#80DBB9",
        "doldor_text": "#161C32",
        "doldor_button_bg": "#80DBB9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
    container: {
      center: true,
    }
  },
  darkMode: "class",
  plugins: [],
};
