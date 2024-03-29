module.exports = {
  content: [
    "./{app, components, src}/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {DEFAULT: 'rgba(251, 251, 251, 0.98)'},
        dark: {DEFAULT: 'rgba(39, 40, 43, 0.98)'},
        gray: {
          10: '#FCFCFC',
          50: '#F7F9F9',
          100: '#F2F2F2',
          450: '#878E9B',
          500: '#707786',
          600: '#424242',
          700: '#373737',
          800: '#303236',
          850: '#222325',
          900: '#1F2023',
        },
      },
    },
  },
}
