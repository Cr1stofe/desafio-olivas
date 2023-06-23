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
        sans: 'var(--font-roboto)',
        alt: 'var(--font-ibm)',
      },
      colors: {
        gray: {
          100: '#fcfdfd',
          200: '#fafbfc',
          300: '#f5f8f8',
          400: '#e0e7ea',
          500: '#a8adb0',
          800: '#656869',
          900: '#4e5152',
        },
        'ocean-blue': {
          300: '#113657',
          700: '#0d2941',
          900: '#06131e',
        },
        blue: {
          300: '#37B7C8',
          500: '#6DC7D4',
        },
        green: {
          300: '#8ECB53',
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
      }
    },
  },
  plugins: [],
}
