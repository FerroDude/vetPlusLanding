import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the GitHub repo name: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/vetPlusLanding/',
  plugins: [react()],
})
