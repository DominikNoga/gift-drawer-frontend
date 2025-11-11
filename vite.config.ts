import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@gd/shared': path.resolve(__dirname, 'src/shared'),
      '@gd/types': path.resolve(__dirname, 'src/shared/types'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/index" as *;`
      }
    }
  }
});
