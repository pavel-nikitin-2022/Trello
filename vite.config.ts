import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@panels": fileURLToPath(new URL("./src/panels", import.meta.url)),
            "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        },
    },
});
