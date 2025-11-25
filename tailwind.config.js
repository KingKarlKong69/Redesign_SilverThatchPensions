/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Teal/Emerald tones
        'thatch': {
          50: '#f0fffe',
          100: '#c1f0e8',  // Primary color
          200: '#a3e9dd',
          300: '#7de0cf',
          400: '#5bd7c1',
          500: '#3dcdb3',
          600: '#2eb89e',
          700: '#268d7a',
          800: '#1e6f61',
          900: '#165247',
        },
        // Secondary palette - Slate/Blue-gray
        'slate-custom': {
          50: '#f8f9fa',
          100: '#e8eaed',
          200: '#d1d5db',
          300: '#b0b7c3',
          400: '#8891a0',
          500: '#586172',  // Secondary color
          600: '#4a5263',
          700: '#3d4354',
          800: '#2f3444',
          900: '#1f2332',
        },
        // Accent colors for depth
        'pearl': {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf9f8',
          300: '#f5f3f1',
          400: '#ede9e5',
          500: '#e5dfd9',
        },
        'ocean': {
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
        },
        'mint': {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5de4c7',
          400: '#2dd4bf',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'thatch-gradient': 'linear-gradient(135deg, #c1f0e8 0%, #7de0cf 50%, #3dcdb3 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #4fd1c5 0%, #38b2ac 50%, #2eb89e 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.2)',
        'inner-glass': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.5)',
        'float': '0 20px 60px -15px rgba(62, 205, 179, 0.3)',
        'float-lg': '0 30px 80px -20px rgba(62, 205, 179, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sway': 'sway 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) scale(1.05)' },
          '25%': { transform: 'translateX(-8px) translateY(-5px) scale(1.05)' },
          '50%': { transform: 'translateX(5px) translateY(8px) scale(1.05)' },
          '75%': { transform: 'translateX(-5px) translateY(5px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
