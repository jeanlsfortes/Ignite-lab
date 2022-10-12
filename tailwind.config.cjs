/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl':32,
    },
    colors:{
      'preto': '#000000',
      'vermelho':'#D91F25',
      'cinza-200':'#202024',
      'cinza-400':'#121214',
      'amarelo':'#F3E627',
      'marrom':'#271A11',
      'branco-400':'#C4C4CC',
      'branco-200':'#E1E1E6',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
