/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#22c55e',
          dark: '#16a34a',
          glow: '#4ade80',
        },
        dark: {
          bg: '#050505',
          card: '#0f0f0f',
          border: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'green-glow': '0 0 40px rgba(34, 197, 94, 0.3)',
        'green-glow-sm': '0 0 15px rgba(34, 197, 94, 0.2)',
      }
    },
  },
  plugins: [],
};
