/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Theme One
        'f-main': 'hsl(222, 26%, 31%)',
        'f-toggle': 'hsl(223, 31%, 20%)',
        'f-screen': 'hsl(224, 36%, 15%)',
        'f-func-key': 'hsl(225, 21%, 49%)',
        'f-func-key-shadow': 'hsl(224, 28%, 35%)',
        'f-toggle-key': 'hsl(6, 63%, 50%)',
        'f-toggle-shadow': 'hsl(6, 70%, 34%)',
        'f-key': 'hsl(30, 25%, 89%)',
        'f-key-shadow': 'hsl(28, 16%, 65%)',
        'f-text': 'hsl(221, 14%, 31%)',
        'f-hover': '',
        // Theme Two
        's-main': 'hsl(0, 0%, 90%)',
        's-toggle': 'hsl(0, 5%, 81%)',
        's-screen': 'hsl(0, 0%, 93%)',
        's-func-key': 'hsl(185, 42%, 37%)',
        's-func-key-shadow': 'hsl(185, 58%, 25%)',
        's-toggle-key': 'hsl(25, 98%, 40%)',
        's-toggle-shadow': 'hsl(25, 99%, 27%)',
        's-key': 'hsl(45, 7%, 89%)',
        's-key-shadow': 'hsl(35, 11%, 61%)',
        's-text': 'hsl(60, 10%, 19%)',
        's-hover': '',
        // Theme Three
        't-main': 'hsl(268, 75%, 9%)',
        't-secondary': 'hsl(268, 71%, 12%)',
        't-func-key': 'hsl(281, 89%, 26%)',
        't-func-key-shadow': 'hsl(285, 91%, 52%)',
        't-toggle-key': 'hsl(176, 100%, 44%)',
        't-toggle-shadow': 'hsl(177, 92%, 70%)',
        't-key': 'hsl(268, 47%, 21%)',
        't-key-shadow': 'hsl(290, 70%, 36%)',
        't-text': 'hsl(52, 100%, 62%)',
        't-hover': '',
        'very-dark-blue': 'hsl(198, 20%, 13%)'
      },
      fontFamily: {
        'spartan': '"League Spartan"'
      },
      screens: {
        'xxs': '365px'
      }
      
    }
  },
  plugins: []
};