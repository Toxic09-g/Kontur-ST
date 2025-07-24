module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        logo: ['"Russo One"', 'sans-serif'], // если ты подключал шрифт
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'scroll-partners': 'scroll-left 30s linear infinite',
        'slide-down': 'slide-down 0.3s ease-out',
      },

      keyframes: {
        fadeInUp: {
          'slide-down': {
            '0%': { transform: 'translateY(-20%)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },

  plugins: [],
};
