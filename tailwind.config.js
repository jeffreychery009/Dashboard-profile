/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        "custom-mobile": { min: "320px", max: "480px" },
        "custom-tablet": { min: "481px", max: "768px" },
        "custom-desktop": { min: "769px" },
      },

      spacing: {
        3: "1rem",
        4: "1.25rem",
        5: "3.125rem",
        "input-width": "21.875rem",
        "input-height": "2.5rem",
      },

      width: {
        "card-w": "21.875rem",
      },

      height: {
        "card-h": "9.375rem",
      },

      borderRadius: {
        "input-radius": "1.875rem",
        "card-radius": ".75rem",
      },

      padding: {
        "card-padding": "1rem",
        profile: "1.5rem", //Custom padding for profile elements
        paddingX: "1.25rem", // Custom padding for left and right
        "padding-top": "1.25rem", // Custom padding for top
        "padding-bottom": "1.25rem", // Custom padding for bottom
      },

      colors: {
        "custom-bg": "#F7F7F7",
        "custom-text": "#767474",
      },

      // Custom font-size
      fontSize: {
        ui: "0.875rem",
        xs: ".75rem",
        sm: "1.25rem",
        md: "1.375rem",
        lg: "2rem",
      },

      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #0A42D4, #20A2D9)",
      },
    },
  },
  plugins: [],
};
