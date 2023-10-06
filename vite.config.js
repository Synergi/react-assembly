import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath, URL } from 'url';

/** @type {import('vite').UserConfig} */

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    basicSsl(),
    checker({ typescript: true }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/main.tsx', import.meta.url)),
      name: 'ReactAssembly',
      fileName: 'react-assembly',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  server: {
    https: true,
    port: 3030,
  },
  root: 'src',
})
