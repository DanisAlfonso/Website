// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00796B',
        dark: {
          background: '#121212',
          surface: '#1D1D1D',
          text: '#E4E4E4',
        },
        light: {
          background: '#FFFFFF',
          surface: '#F3F4F6',
          text: '#1F2937',
        },
      },
    },
  },
  plugins: [],
};

