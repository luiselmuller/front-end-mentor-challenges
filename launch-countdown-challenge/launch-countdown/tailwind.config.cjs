/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(237, 21%, 26%)',
        'primary-red': 'hsl(345, 95%, 68%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'dark-blue': 'hsl(236, 21%, 26%)',
        'darker-blue': 'hsl(235, 16%, 14%)',
        'very-dark-blue': 'hsl(234, 17%, 12%)',
        'above-hills': 'hsl(270,18%,14%)'
      },
      backgroundImage: {
        'stars': 'url("bg-stars.svg")',
        'hills': 'url("pattern-hills.svg")'
      },
      fontFamily: {
        'red-hat': '"Red Hat Text"'
      }
    }
  },
  plugins: []
};