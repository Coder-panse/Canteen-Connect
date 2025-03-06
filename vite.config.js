import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom extra small breakpoint
      },
    },
  },
  plugins: [react(),tailwindcss(),],
  
})
