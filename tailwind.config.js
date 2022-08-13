module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        'cloud': "url('../src/assets/cloud.jpg')"
      },

    },
  },
  plugins: [],
}