import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'./src')
    }
  },
  server: {
    proxy: {
       '/api': {
        target: loadEnv(mode, process.cwd()).VITE_BACKEND_SERVER,//配置跨域地址，vue2使用process获取，vue3使用loadEnv方法获取,这个地址是实际的ip地址，而不是localhost，因为前端在wsl，后端在windows中，会有请求跨系统的问题
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
})

