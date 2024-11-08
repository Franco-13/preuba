import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Registrará el service worker automáticamente
      devOptions: {
        enabled: true, // Habilita el service worker en modo de desarrollo
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              /\/.*\.(?:js|css|html|json|png|jpg|jpeg|svg|gif|woff|woff2|ttf)$/,
            handler: "NetworkFirst", // Usa el caché en primer lugar y luego la red
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 10 * 60,
              },
            },
          },
        ],
      },
      manifest: {
        name: "Mi Proyecto",
        short_name: "Proyecto",
        description: "Aplicación React con Service Worker y Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/preuba/",
});
