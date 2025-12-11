import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tekweb-pertemuan-7-web-ruang-ekspresi/',
  plugins: [react(), tailwindcss()],
})
