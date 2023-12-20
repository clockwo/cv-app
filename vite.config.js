import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@scss',
        replacement: path.resolve(__dirname, 'src/assets/scss/abstracts'),
      },
    ],
  },

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [react()],
});
