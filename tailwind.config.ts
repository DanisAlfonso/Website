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
        primary: '#1a73e8',
        dark: {
          background: '#0b0b0b',
          surface: '#1a1a1a',
          text: '#e4e4e4',
        },
        light: {
          background: '#ffffff',
          surface: '#f3f4f6',
          text: '#1f2937',
        },
      },
    },
  },
  plugins: [],
};

