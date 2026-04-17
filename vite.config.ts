/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        visualizer({
            filename: "dist/stats.html",
            gzipSize: true,
            brotliSize: true,
            template: "treemap",
        }),
    ],
    server: {
        port: parseInt(process.env.PORT || "3001"),
        host: true,
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
        target: "es2020",
        cssMinify: true,
        minify: "terser",
        cssCodeSplit: true,
        reportCompressedSize: false,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    "router": ["react-router-dom"],
                    "motion": ["framer-motion"],
                },
            },
            treeshake: {
                preset: "recommended",
            },
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/test/setup.ts"],
        css: false,
    },
});
