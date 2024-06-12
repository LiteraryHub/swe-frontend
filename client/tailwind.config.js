/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#C26D0A',
        'customColor-hover': '#C26D0A',
        // Add other custom colors and their hover states if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
