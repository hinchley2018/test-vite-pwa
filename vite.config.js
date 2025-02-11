import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifest = {
  registerType: "prompt",
  manifest: {
    name: "Test PWA",
    short_name: "Test PWA",
    description: "An app",
    icons: [
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
