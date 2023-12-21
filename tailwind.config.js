/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      xs :'300px',
      sm: '480px',
      smp: '600px',
      md: '768px',
      mdp:'800px',
      lg: '976px',
      lgp: '1100px',
      xl: '1440px',

    },
    extend: {},
  },
  plugins: [],
}

