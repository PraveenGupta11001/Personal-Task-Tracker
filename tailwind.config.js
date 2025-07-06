// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-light': '#f5f5f5',
          'primary-dark': '#1a1a1a', 
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  };
  