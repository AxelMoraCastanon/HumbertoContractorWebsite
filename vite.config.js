import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Custom domain requires base set to '/'
  plugins: [react()],
})
