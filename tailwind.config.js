/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        backgroundLight:"#F6FBFF",
        backgroundNight: "#000000",
        contentNight: "#7D7789",
        contentLight: "#d1d1d1",
        headerNight: "#333333",
        headerLight: "#dedcdc",
        textWhite: "#ffffff",
        backgroundWhite: "#ffffff"
      }
    },
  },
  plugins: [],
}
