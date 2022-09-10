/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/layout/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.html',
    './index.html',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
