import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Replace `src` with your actual source directory
      '@fonts': path.resolve(__dirname, 'src/fonts'),
    }
  },
  server: {
    port: 3000,
    hot: true
  }
})
