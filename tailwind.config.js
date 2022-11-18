/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '375px',
          md: '768px',
          xl: '1216px',
        },
      },
      screens: {
        sm: '375px',
        md: '768px',
        xl: '1440px',
      },
    },

    fontFamily: {
      'sans': ['General Sans'],
    },


    // container: {
    //   center: true,

    // },

  },
  plugins: [],
}