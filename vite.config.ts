import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'./src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.16.10.14:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      }
    },
    hmr: {
      overlay: false
    }
  }
})
