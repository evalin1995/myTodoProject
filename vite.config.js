import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 建立一個開發中的路徑
  // process.env.NODE_ENV =>取得node環境中的變數
  base:process.env.NODE_ENV ==='production' ?'/myYodoProject/':'/',
  plugins: [react()],
})
