/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      spacing: {
        "mb-13": "3.25rem",
        "input-width": "350px",
        "input-height": "40px",
      },
      width: {
        "card-w": "350px",
      },

      height: {
        "card-h": "150px",
      },

      borderRadius: {
        "input-radius": "30px",
        "card-radius": "12px",
      },
      padding: {
        "card-padding": "16px",
        profile: "1.5rem",
      },
      colors: {
        "gradient-blue": {},
        "custom-bg": "#F7F7F7",
      },
      fontSize: {
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
