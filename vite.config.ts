import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file for the current mode.
  // The third argument '' allows loading all variables without the VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // This is crucial for deploying to a subdirectory on GitHub Pages.
    // Set this to the name of your repository.
    base: '/Social-post/',
    define: {
      // This makes the environment variable available in your client-side code.
      // Vite will replace `process.env.API_KEY` with the actual value at build time.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
