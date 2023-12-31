
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  important: true,
  // Active dark mode on class basis
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'mona-sans': ['Mona-Sans', 'sans']
      },
      backgroundImage: {
        'hand2': 'url("./src/assets/images/hand2.jpg")'
      }
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    
  ],
}



 