/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-black': '#000000',
        'brand-dark': '#050505',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'serif'],
      },
      animation: {
        'scroll': 'scroll 80s linear infinite',
        'blob': 'blob 10s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'enter-left': 'enterLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'enter-right': 'enterRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'enter-bottom': 'enterBottom 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'enter-zoom': 'enterZoom 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'marquee-up': 'marqueeUp 60s linear infinite',
        'marquee-down': 'marqueeDown 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
        'gdc-flow': 'gdc-flow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        marqueeDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shine: {
          '100%': { left: '125%' },
        },
        enterLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        enterRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        enterBottom: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        enterZoom: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gdc-flow': {
          '0%': { letterSpacing: '-0.05em', fontWeight: '800' },
          '50%': { letterSpacing: '0.05em', fontWeight: '900' },
          '100%': { letterSpacing: '-0.05em', fontWeight: '800' },
        },
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
