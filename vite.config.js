import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifest = {
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'meet-app-192.png','meet-app-144.png','meet-app-512.png'],
  registerType: "prompt",
  manifest: {
    name: "Test PWA",
    short_name: "Test PWA",
    description: "An app",
    theme_color: '#ffffff',
    icons: [
      
      {
      "src": "favicon.ico",
      "sizes": "48x48",
      "type": "image/x-icon",
      "purpose": "maskable"
      },
      {
      "src": "meet-app-144.png",
      "type": "image/png",
      "sizes": "144x144",
      "purpose": "any"
      },
      {
      "src": "meet-app-192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "maskable"
      },
      {
      "src": "meet-app-512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
      }
       
    ],
    display: "standalone",
    scope: "/",
    start_url: "/"
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(manifest)],
})
