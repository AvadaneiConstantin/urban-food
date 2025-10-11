import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Required for resolving absolute paths

/**
 * @type {import('vite').UserConfig}
 * Vite configuration for the React application.
 */
export default defineConfig({
  // Use the fast React plugin with SWC (if configured in package.json)
  plugins: [react()],

  // Configure module resolution
  resolve: {
    alias: {
      // IMPORTANT: Define the '@/...' alias to align with tsconfig.app.json
      // This ensures module imports like '@/components/X' work correctly in the bundler.
      "@": path.resolve(__dirname, "src"),
      // If other aliases existed (e.g., @lib), they will be added here
    },
  },

  // Optional: Development server settings
  server: {
    port: 5173,
    strictPort: true, // Fail if port 5173 is already in use
    open: false, // Automatically open the browser on startup
  },

  // Build configuration
  build: {
    outDir: "dist", // The output directory for the production build
    // Optional: Enables source maps for easier debugging in production
    sourcemap: true,
  },
});
