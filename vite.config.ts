import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

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
        target: process.env.VITE_SERVER,//配置跨域地址，使用process
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
})

