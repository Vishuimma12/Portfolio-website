import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // Adjust chunk size warning limit
    minify: 'terser',  // Or 'esbuild' if you are using that
    terserOptions: {
      compress: {
        drop_console: true,
        global_defs: {
          'process.env.NODE_ENV': '"production"'
        },
        pure_funcs: ['eval']  // Add this to avoid eval errors
      },
      format: {
        comments: false
      }
    }
  }
})
