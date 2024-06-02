import { defineConfig } from 'vite';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import jsconfigPath from 'vite-jsconfig-paths';
import path from 'path';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'logo64x64.png'],
  manifest: {
    short_name: 'IVIWORK',
    name: 'IVI WORK',
    description: 'IVI WORK -  Đơn giản hóa mọi quy trình làm việc',
    icons: [
      {
        src: '/logo32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/logo64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/logo192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/logo512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    start_url: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#ffffff',
    // "matches": [
    //     "*://*.iviwork.local/*"
    // ]
    orientation: 'portrait',
  },
};

export default defineConfig({
  plugins: [react(), jsconfigPath(), svgr(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
