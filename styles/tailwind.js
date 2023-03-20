module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./globalComponents/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
  theme: {
    screens: {
      "sm": {"max": "767px"},
      "md": {"min": "768px", "max": "1023px"},
      "lg": {"min": "1024px"}
    },
    fontFamily: {
      sans: "var(--Roboto)",
      ubuntu: "var(--Ubuntu)"
    },
    colors: {
      basic: "#f37232",
      darkGray: "#323740",
      black: "#000000",
      white: "#FFFFFF",
      error: "#ce3737"
    }
  }
}
