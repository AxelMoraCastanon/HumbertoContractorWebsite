import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Relative path for custom domain
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', // Explicitly set the entry point
    }
  }
});
