import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBase(raw) {
  if (raw == null || raw === '' || raw === '/') return '/';
  const withSlash = raw.endsWith('/') ? raw : `${raw}/`;
  return withSlash.startsWith('/') ? withSlash : `/${withSlash}`;
}

// Default base is "/" so JS/CSS load on Vercel, Netlify, and local preview.
// For GitHub Pages project sites (yosefbrodt.github.io/BajaBurger/), run:
//   npm run build:github
// or set VITE_BASE_PATH=/BajaBurger/ in .env.production
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = normalizeBase(env.VITE_BASE_PATH);

  return {
    plugins: [react()],
    base,
  };
});
