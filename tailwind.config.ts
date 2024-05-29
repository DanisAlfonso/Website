/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#000000',
          surface: '#111111',
          text: '#FFFFFF',
          primary: '#0070f3',
        },
        primary: '#0070f3',
      },
    },
  },
  plugins: [],
};

