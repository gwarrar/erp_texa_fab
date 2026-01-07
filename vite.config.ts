import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyFileSync, mkdirSync, readdirSync, existsSync } from "fs";

// Helper function to copy directory recursively
function copyDir(src: string, dest: string) {
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [
    react(),
    {
      name: 'copy-php-api',
      closeBundle() {
        // Copy API folder to dist
        const apiSrc = path.resolve(__dirname, 'public/api');
        const apiDest = path.resolve(__dirname, 'dist/api');
        copyDir(apiSrc, apiDest);
        console.log('✅ Copied API folder to dist');

        // Copy data folder to dist
        const dataSrc = path.resolve(__dirname, 'public/data');
        const dataDest = path.resolve(__dirname, 'dist/data');
        copyDir(dataSrc, dataDest);
        console.log('✅ Copied data folder to dist');

        // Create uploads directory
        const uploadsDir = path.resolve(__dirname, 'dist/uploads/images');
        mkdirSync(uploadsDir, { recursive: true });
        console.log('✅ Created uploads directory');
      }
    }
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
    host: process.env.TEMPO === "true" ? '0.0.0.0' : undefined,
  },
  build: {
    // Ensure .htaccess is copied
    copyPublicDir: true,
  }
});
