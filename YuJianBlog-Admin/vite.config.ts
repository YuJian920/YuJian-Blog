import { resolve } from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    // visualizer()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@model": resolve(__dirname, "src/model"),
      "@service": resolve(__dirname, "src/service"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#C04851",
        },
        javascriptEnabled: true, // 支持内联 JavaScript
      },
    },
  },
});
