/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Norms Pro"', 'sans-serif'],
      },
      fontWeight: {
        medium: '600',
      }
    },
  },
  plugins: [],
}
