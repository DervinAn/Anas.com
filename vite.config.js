import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default {
   base: "/Anas.com/",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
}