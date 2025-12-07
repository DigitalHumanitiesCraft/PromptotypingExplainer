import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  base: '/PromptotypingExplainer/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        vault: resolve(__dirname, 'vault.html'),
        glossar: resolve(__dirname, 'glossar.html'),
        bibliographie: resolve(__dirname, 'bibliographie.html'),
      },
    },
  },
})
