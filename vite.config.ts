import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for deploying to a subdirectory on GitHub Pages.
  // Set this to the name of your repository.
  base: '/Social-post/',
  define: {
    // Some libraries use process.env, and Vite doesn't define it by default.
    // This shim prevents 'process is not defined' errors in the browser.
    'process.env': {}
  }
})
