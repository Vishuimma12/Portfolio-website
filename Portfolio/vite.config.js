import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this if deploying to a subpath
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://6705814853d3530008065616--sage-syrniki-d3509d.netlify.app', // Your deployed site URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
  },
});
