import { reactRouter } from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  // plugins: [
  //   react({
  //     babel: {
  //       plugins: [['babel-plugin-react-compiler']],
  //     },
  //   }),
  // ],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },

  server: {
    // watch: {
    //   usePolling: true,
    // },
    // host: true,
    // strictPort: true,
    port: 8080,
  },

})
