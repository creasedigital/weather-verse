/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
        // Add Montserrat for headings
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
          primary: "#6B7280",
          secondary: "#4B5563",
          accent: "#8B5CF6",
          highlight: "#D97706",
      },
    },
  },
  plugins: [],
};
