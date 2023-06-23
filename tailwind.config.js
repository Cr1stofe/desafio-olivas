/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-noto)',
      },
      colors: {
        gray: {
          100: '#fcfdfd',
          200: '#F0F1F5',
          300: '#737373',
          400: '#E5E5E5',
          700: '#00374F',
          800: '#4C4C4C',
          900: '#4e5152',
        },
        blue: {
          300: '#37B7C8',
          400: '#36B6C7',
          500: '#6DC7D4',
          600: '#006999',
          700: '#4B8AA4',
          900: '#022776',
        },
        green: {
          300: '#8ECB53',
          500: '#508F59',
        },
        rose: {
          300: '#F390A8',
          500: '#E46B88',
        },
      },
      fontSize: {
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
      },
      screens: {
        'sm': '300px',
        '2xl': '1480px',
      }
    },
  },
  plugins: [],
}
