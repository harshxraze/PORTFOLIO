/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Michroma"', 'system-ui', 'sans-serif'],
        display: ['"Bitcount Grid Single"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: { DEFAULT: '#00E6FE' },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,230,254,0.3)',
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        bgscroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 1000px' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        bgscroll: 'bgscroll 80s linear infinite',
      },
    },
  },
  plugins: [],
};
