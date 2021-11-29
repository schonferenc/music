module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 10s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { left: '110%' },
          '100%': { left: '-200%' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
