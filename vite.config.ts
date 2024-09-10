import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
      // Conditionally apply proxy in development mode
      ...(mode === "development" && {
        proxy: {
          "/api/news": {
            target: "https://newsapi.org",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/news/, "/v2/everything"),
          },
        },
      }),
    },
  };
});
