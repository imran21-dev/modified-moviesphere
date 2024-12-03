/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#ffffff',
          secondary: '#cfcfcf',
          accent: '#ff0000e8',
          neutral: '#000000',
          'base-100': '#ffffff', 
        
      
        },
        black: {
          primary: '#000000',
          secondary: '#333333',
          accent: '#ff0000e8',
          neutral: '#ffffff',
          'base-100': '#000000',
       
         
        },
      },
    ],
  },
}

