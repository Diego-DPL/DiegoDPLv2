import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#928A85',
        color2: '#EAE9E4',
        color3: '#67676A',
        color4: '#B2A69E',
        bg1: '#CDC9C6',
        color6: '#2D3137',
        customBorder: '#408494',
        customPurple: '#1E0E62',
        customGray: '#D2D1D9',
  
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
