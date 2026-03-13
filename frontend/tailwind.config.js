/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005CA9',
        primaryDark: '#003E73',
        secondary: '#1E88E5',
        accent: '#E3F2FD',
        background: '#F5F7FA',
      },
    },
  },
  plugins: [],
}
