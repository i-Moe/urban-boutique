/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Se src é a raiz de tudo, não precisa repetir app e components.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cormorant Garamond"', 'sans-serif'],
      },
      boxShadow: {
        'solid': '4px 4px 0px rgba(56, 50, 42, 1)',
      },
      colors: {
        choco: '#38322a',
        lemon: '#f5ae56',
        vitamin: '#ed775b',
        mint: '#028e87',
        chillmint: '#69adaa',
        cream: '#f3e7d7',
        lightcream: '#f7f2eb',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.25)', 
        'choco': '3px 2px 1px theme("colors.choco")',
        'urban': '1px 1px 5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
