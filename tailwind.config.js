/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        'custom': '30rem', // ou o valor desejado
      },
    },
  },
  plugins: [],
}

