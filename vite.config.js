import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ ADD THIS LINE
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Fix for __dirname not defined in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/my-portfolio/", // 👈 GitHub repo name
  plugins: [
    react(),
    tailwindcss(), // ✅ ADD THIS LINE TOO
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
