import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lista de tareas pendientes/', // 👈 importante: debe tener slash inicial y final
})