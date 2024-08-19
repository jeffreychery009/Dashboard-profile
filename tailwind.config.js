/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        "custom-mobile": { min: "320px", max: "480px" },
        "custom-tablet": { min: "481px", max: "900px" },
        "custom-desktop": { min: "901px" },
      },

      spacing: {
        3: "1rem",
        4: "1.25rem",
        5: "3.125rem",
        "input-width": "21.875rem",
        "input-height": "2.5rem",
        "input-add-height": "3.125rem",
      },

      width: {
        "card-w": "100%",
      },

      height: {
        "card-h": "9.375rem",
      },

      borderRadius: {
        "input-add-radius": "2.5rem",
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
        "custome-active": "#D9D9D9",
        blue: "#0A42D4",
        "light-gray": "#DADADA",
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
        "light-gradient": "linear-gradient(to right, #F11919, #FC8619",
        "dark-gradient": "linear-gradient(to right, #0a42d4, #20a2d9)",
      },
    },
  },
  plugins: [],
};
