import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@genshi/react': path.resolve(__dirname, '../../packages/react/src'),
      '@genshi/tokens/css': path.resolve(
        __dirname,
        '../../packages/tokens/dist/tokens.css'
      ),
    },
  },
});
