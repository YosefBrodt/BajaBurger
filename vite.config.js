import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project URL: https://<user>.github.io/<repo>/
// For a root domain or Vercel at "/", set base to "/" instead.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/BajaBurger/' : '/',
}));
