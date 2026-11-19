import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses (localhost, 127.0.0.1, LAN)
    port: 3000,
    open: true
  }
})
