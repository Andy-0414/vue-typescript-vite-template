import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [vue()],
    esbuild: {
        jsxInject: `import { h } from 'vue'`,
        jsxFactory: "h",
        jsxFragment: "Fragment",
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/app.scss";`,
            },
        },
    },
});
