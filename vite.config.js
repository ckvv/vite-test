
// @ts-nocheck
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import { fileURLToPath, URL } from "url";
import { visualizer } from "rollup-plugin-visualizer";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";

const rootPath = fileURLToPath(new URL("./", import.meta.url));
const visualizerPlugin = () => {
  if (!process.env.NODE_ENV_REPORT) return;
  const plugin = visualizer({
    template: "treemap",
    filename: "report/report.html",
    gzipSize: true,
  });
  plugin.outputOptions = () => {
    console.info(`\nReport: file://${rootPath}report/report.html\n`);
  };
  return plugin;
};

// https://vitejs.dev/config/
export default defineConfig({
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
    visualizerPlugin(),
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

