module.exports = {
  theme: {
    extend: {
      keyframes: {
        animar: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },
      animation: {
        animar: 'animar 5s ease-in-out',
      }
    },
  },
};
