

/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    //一定要有完整色票與各自色階的定義才能覆蓋, 下面是default色票色階
    // colors: {
      // inherit: colors.inherit,
      // current: colors.current,
      // transparent: colors.transparent,
      // black: colors.black,
      // white: colors.white,
      // slate: colors.slate,
      // gray: colors.gray,
      // zinc: colors.zinc,
      // neutral: colors.neutral,
      // stone: colors.stone,
      // red: colors.red,
      // orange: colors.orange,
      // amber: colors.amber,
      // yellow: colors.yellow,
      // lime: colors.lime,
      // green: colors.green,
      // emerald: colors.emerald,
      // teal: colors.teal,
      // cyan: colors.cyan,
      // sky: colors.sky,
      // blue: colors.blue,
      // indigo: colors.indigo,
      // violet: colors.violet,
      // purple: colors.purple,
      // fuchsia: colors.fuchsia,
      // pink: colors.pink,
      // rose: colors.rose,
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    }
  },
  plugins: [],
};