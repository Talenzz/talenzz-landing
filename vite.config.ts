import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ref: https://github.com/vitejs/vite/issues/512#issuecomment-656547187
  base: process.env.VITE_BASE_URL ?? "/",
});
