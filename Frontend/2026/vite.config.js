import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // ⬇️ ADD THIS NEW BLOCK ⬇️
  server: { 
    proxy: {
      // Any request starting with '/api' (e.g., fetch('/api/users')) 
      // will be forwarded to http://localhost:3000
      '/api': {
        target: 'http://localhost:3000', // The address of your running Express backend
        changeOrigin: true, // Needed for virtual hosting
        secure: false, // Set to true if your backend uses HTTPS
      }
    }
  } 
  // ⬆️ END OF NEW BLOCK ⬆️
});