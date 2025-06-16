import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',    // For Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}',  // For Next.js pages directory (if using)
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        lightHover: '#fcf4ff', // Light gray background
        darkHover: '#2a004a', // Dark gray text
        darkTheme: '#11001F', // Dark theme background
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0px #000',
        'white' : '4px 4px 0px #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector', // Enable dark mode support
  plugins: [],
}
