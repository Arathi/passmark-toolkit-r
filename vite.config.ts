import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monkey, { cdn } from 'vite-plugin-monkey';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 24051,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://www.cpubenchmark.net/favicon.ico',
        name: "Passmark Toolkit R",
        namespace: 'com.undsf.tmus.pmtk',
        author: "Arathi of Nebnizilla",
        homepageURL: "https://github.com/Arathi/passmark-toolkit-r",
        downloadURL: "https://github.com/Arathi/passmark-toolkit-r/raw/master/dist/passmark-toolkit-r.user.js",
        updateURL: "https://github.com/Arathi/passmark-toolkit-r/raw/master/dist/passmark-toolkit-r.user.js",
        match: [
          'https://www.cpubenchmark.net/high_end_cpus.html',
          'https://www.cpubenchmark.net/mid_range_cpus.html',
          'https://www.cpubenchmark.net/midlow_range_cpus.html',
          'https://www.cpubenchmark.net/low_end_cpus.html',
          'https://www.videocardbenchmark.net/high_end_gpus.html',
          'https://www.videocardbenchmark.net/mid_range_gpus.html',
          'https://www.videocardbenchmark.net/midlow_range_gpus.html',
          'https://www.videocardbenchmark.net/low_end_gpus.html'
        ],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr(
            'ReactDOM',
            'umd/react-dom.production.min.js',
          ),
        },
      },
    }),
  ],
});
