import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this to your base URL if deploying to a subpath
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the directory structure
    chunkSizeWarningLimit: 1000 // Optional: Adjust chunk size warning limit if needed
  }
});
