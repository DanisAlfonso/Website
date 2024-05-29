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
          background: '#000000', // Adjust to match the Next.js dark background
          surface: '#111111',    // Adjust to match the Next.js surface color
          text: '#FFFFFF',       // Adjust to match the Next.js text color
          primary: '#0070f3',    // Adjust to match the Next.js primary color
        },
      },
    },
  },
  plugins: [],
};

