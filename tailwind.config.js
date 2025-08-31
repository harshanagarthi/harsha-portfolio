/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'blaka-ink': ['Blaka Ink', 'cursive'],
        'bodoni-moda': ['Bodoni Moda', 'serif'],
        'train-one': ['Train One', 'cursive'],
        'encode-sans-sc': ['Encode Sans SC', 'sans-serif'],
        'trade-winds': ['Trade Winds', 'cursive'],
      },
    },
  },
  plugins: [],
}
