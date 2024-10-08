import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // Increase chunk size warning limit
    minify: 'terser',  // Ensure terser is used for minification
    terserOptions: {
      compress: {
        drop_console: true,
        global_defs: {
          'process.env.NODE_ENV': '"production"'
        },
        pure_funcs: ['eval'],  // Suppress eval warnings
      },
      format: {
        comments: false  // Remove comments
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create a separate chunk for `three-stdlib` to avoid issues with minification
          if (id.includes('three-stdlib')) {
            return 'three-stdlib';
          }
        }
      }
    }
  }
});
