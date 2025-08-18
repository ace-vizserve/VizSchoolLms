import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import ViteSitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/about",
  "/our-programmes",
  "/reviews",
  "/blogs",
  "/contact-us",
  "/faq",
  "/sitemap",
  "/our-teachers",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteSitemap({
      basePath: "",
      dynamicRoutes: routes,
      generateRobotsTxt: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
  },
});
