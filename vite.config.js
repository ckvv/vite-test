
// @ts-nocheck
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import { fileURLToPath, URL } from "url";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";

const rootPath = fileURLToPath(new URL("./", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test/",
  plugins: [
    Components({
      transformer: "vue2",
      types: [],
      dirs: ["src/components/common"],
      deep: false,
      resolvers: ElementUiResolver({
        importStyle: false,
      }),
    }),
    vue(),
  ],
  server: {
    port: 5577,
    // 绕过反向代理来避免错误
    strictPort: true,
    hmr: { clientPort: 5577 },
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".vue"],
  },
});

