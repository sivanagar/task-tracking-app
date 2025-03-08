

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Quicksand", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      // 1. Custom Colors
      colors: {
         'taupe': { DEFAULT: '#463f3a', 100: '#0e0d0c', 200: '#1c1917', 300: '#2a2623', 400: '#38322e', 500: '#463f3a', 600: '#6f645d', 700: '#978b82', 800: '#b9b1ac', 900: '#dcd8d5' }, 'battleship_gray': { DEFAULT: '#8a817c', 100: '#1c1a18', 200: '#373331', 300: '#534d49', 400: '#6e6662', 500: '#8a817c', 600: '#a19995', 700: '#b9b3b0', 800: '#d0ccca', 900: '#e8e6e5' }, 'silver': { DEFAULT: '#bcb8b1', 100: '#282622', 200: '#4f4b44', 300: '#777165', 400: '#9c958a', 500: '#bcb8b1', 600: '#cac7c1', 700: '#d8d5d1', 800: '#e5e3e0', 900: '#f2f1f0' }, 'isabelline': { DEFAULT: '#f4f3ee', 100: '#3b3726', 200: '#756e4d', 300: '#a8a17a', 400: '#cfcab5', 500: '#f4f3ee', 600: '#f7f6f3', 700: '#f9f8f6', 800: '#fbfbf9', 900: '#fdfdfc' }, 'melon': { DEFAULT: '#e0afa0', 100: '#3a1c13', 200: '#743825', 300: '#ad5438', 400: '#cd7d65', 500: '#e0afa0', 600: '#e6beb2', 700: '#eccec5', 800: '#f3dfd8', 900: '#f9efec' } 

        ,leaf: '#77B28C',
        sunlight: '#F4E3B2',
        cream: '#F9F7F3',
        terracotta: '#D67D3E',
        softblue: '#7FB3D5',
        charcoal: '#333333',
        softgray: '#9CA3AF',
      },

      // 3. Spacing & Sizing
      // Extend or override defaults for special use-cases
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // 4. Border Radii
      borderRadius: {
        'md': '6px',
        'lg': '10px',
        // you can add more if you want a consistent brand rounding
      },

      // 5. Shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
