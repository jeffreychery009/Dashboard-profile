import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,

    // Defining the proxy so it can be used under different IP Addresses
    proxy: {
      "/api/news": {
        target: "https://newsapi.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/news/, "/v2/everything"),
      },
    },
  },
});
