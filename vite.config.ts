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
    host: '0.0.0.0',
    proxy: {
       '/api': {
        target: process.env.VITE_BACKEND_SERVER,//配置跨域地址，使用process,这个地址是实际的ip地址，而不是localhost，因为前端在wsl，后端在windows中，会有请求跨系统的问题
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
})

