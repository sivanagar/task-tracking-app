/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your components
  ],
  theme: {
    extend: {
      // 1. Custom Colors
      colors: {
        brandGreen: {
          50:  "#f4faf7",
          100: "#e8f5ee",
          200: "#c7e9d8",
          300: "#a3dcc0",
          400: "#6ec099",
          500: "#3da674", // primary shade
          600: "#2f805b",
          700: "#205b42",
          800: "#153b2b",
          900: "#0b1e17",
        },
        brandStone: {
          50:  "#f9f9f7",
          100: "#f2f2ef",
          200: "#dbdbd7",
          300: "#c4c4bf",
          400: "#9a9a93",
          500: "#71716a", // used for text or subtle backgrounds
          600: "#5c5c55",
          700: "#3e3e3a",
          800: "#282824",
          900: "#141412",
        },
      },

      // 2. Custom Fonts
      // (In practice, you’d also import these fonts in your CSS or index.html)
      fontFamily: {
        sans: ['Inter', 'sans-serif'],    // overrides default Tailwind sans
        headings: ['Poppins', 'sans-serif'],
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
