
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
    important: true,
      // Active dark mode on class basis
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'mona-sans': ['Mona-Sans', 'sans'], // 'Mona-Sans' es el nombre de la fuente y 'sans' es el fallback
      },
      backgroundImage:{
        'hand2': 'url("./src/assets/images/hand2.jpg")'
      }
      },
    screens: {

        'sm': '320px',

        'md': '768px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',

      },
    },
    screens: {
      light: { raw: "(prefers-color-scheme: light)" },
      dark: { raw: "(prefers-color-scheme: dark)" }
    }
  }




