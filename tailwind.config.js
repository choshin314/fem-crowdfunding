module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "hsl(176, 50%, 47%)",
        "primary-dark": "hsl(176, 72%, 28%)",
        "gray-dark": "#7A7A7A",
        "gray-med": "#707070",
        "gray-light": "#b1b1b1",
      },
      fontFamily: {
        sans: "Commissioner, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      borderRadius: {
        "3.5xl": "33.5px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        75: "18.75rem",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      backgroundColor: ["hover", "active"],
    },
  },
  plugins: [],
};
