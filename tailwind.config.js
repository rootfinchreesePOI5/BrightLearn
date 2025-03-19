export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        navbar: "var(--navbar-color)", 
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)"
      }
    },
  },
  plugins: [],
};
