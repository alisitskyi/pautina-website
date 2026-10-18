/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121212',
          red: '#b3181d',
          gold: '#c5a059',
          gray: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        accent: ['var(--font-roboto-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
