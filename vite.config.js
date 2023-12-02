import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: '/cw-interview',
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
    }),
  ],
  envDir: 'env',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  server: {
    host: true,
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0,
  },
});
