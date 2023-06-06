/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      s: '375px',
      sl: '414px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#05144A',
        grey: '#A9BACC',
        cyan: '#3A96BE',
        yellow: '#FDC90E',
        offWhite: '#F7F8FA',
      },
      fontFamily: {
        title: ['garage-gothic, sans-serif'],
        body: ['lato, sans-serif'],
      },
      maxWidth: {
        main: '1600px',
        narrow: '1440px',
      },
      fontSize: {
        // xxs: ['12px', '18px'],
        // xs: ['14px', '18px'],
        // base: ['16px', '24px'],
        // base: ['16px', '24px'],
        // //* footer sizes
        // fxxs: ['12px', '16px'],
        // fxs: ['10px', '16px'],
        // fs: ['14px', '20px'],
        // xl: ['1.25rem', '1.75rem'],
        // '2xl': ['1.35rem', '2rem'],
        // '3xl': ['30px', '50px'],
        // '4xl': '2.25rem',
        // '5xl': '3rem',
        // '6xl': '3.75rem',
        // '7xl': '5rem',
        // '9xl': ['8.5rem', '.85'],
        // '10xl': ['10rem', '.95'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
