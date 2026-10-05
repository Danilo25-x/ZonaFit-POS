import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['apple-touch-icon.png'],
  manifest: {
    name: 'Zona Fit Orito POS',
    short_name: 'Zona Fit',
    lang: 'es',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4EFE3',
    theme_color: '#26211A',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,woff2,svg,ico}'],
    navigateFallback: '/index.html',
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  },
})],
  base: './',
  server: { port: 5173, strictPort: true }
})