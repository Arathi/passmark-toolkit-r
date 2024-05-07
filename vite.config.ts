import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 24051,
  },
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://www.cpubenchmark.net/favicon.ico',
        namespace: 'com.undsf.tmus.pmtk',
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
