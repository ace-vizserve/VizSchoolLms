import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import ViteSitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/about-vizschool-virtual-learning",
  "/vizschool-online-learning-programmes",
  "/vizschool-reviews-testimonials",
  "/vizschool-blog-latest-education-news",
  "/contact-vizschool-admissions",
  "/vizschool-frequently-asked-questions",
  "/vizschool-sitemap",
  "/school-fees-tuition-vizschool",
  "/vizschool-teachers-expert-educators",
  "/vizschool-primary-school-grades-1-6",
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
