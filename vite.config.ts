import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from 'url'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                          @import "./src/common/assets/styles/helpers/_variables.scss";
                          @import "./src/common/assets/styles/helpers/_mixins.scss";
                `,
      },
    },
  },
  plugins: [vue({ script: { defineModel: true } }), svgLoader()],
})
