// vite.config.ts
import { defineConfig } from "file:///F:/iris/ivi-work/node_modules/vite/dist/node/index.js";
import svgr from "file:///F:/iris/ivi-work/node_modules/@svgr/rollup/dist/index.js";
import react from "file:///F:/iris/ivi-work/node_modules/@vitejs/plugin-react/dist/index.mjs";
import jsconfigPath from "file:///F:/iris/ivi-work/node_modules/vite-jsconfig-paths/dist/index.mjs";
import path from "path";
import { VitePWA } from "file:///F:/iris/ivi-work/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "F:\\iris\\ivi-work";
var manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "logo64x64.png"],
  manifest: {
    short_name: "IVIWORK",
    name: "IVI WORK",
    description: "IVI WORK -  \u0110\u01A1n gi\u1EA3n h\xF3a m\u1ECDi quy tr\xECnh l\xE0m vi\u1EC7c",
    icons: [
      {
        src: "/logo32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/logo64x64.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/logo192x192.png",
        type: "image/png",
        sizes: "192x192"
      },
      {
        src: "/logo512x512.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
    // "matches": [
    //     "*://*.iviwork.local/*"
    // ]
    orientation: "portrait"
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), jsconfigPath(), svgr(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxpcmlzXFxcXGl2aS13b3JrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxpcmlzXFxcXGl2aS13b3JrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9pcmlzL2l2aS13b3JrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ0BzdmdyL3JvbGx1cCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBqc2NvbmZpZ1BhdGggZnJvbSAndml0ZS1qc2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBWaXRlUFdBLCBWaXRlUFdBT3B0aW9ucyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcblxyXG5jb25zdCBtYW5pZmVzdEZvclBsdWdpbjogUGFydGlhbDxWaXRlUFdBT3B0aW9ucz4gPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiAncHJvbXB0JyxcclxuICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ2xvZ282NHg2NC5wbmcnXSxcclxuICBtYW5pZmVzdDoge1xyXG4gICAgc2hvcnRfbmFtZTogJ0lWSVdPUksnLFxyXG4gICAgbmFtZTogJ0lWSSBXT1JLJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnSVZJIFdPUksgLSAgXHUwMTEwXHUwMUExbiBnaVx1MUVBM24gaFx1MDBGM2EgbVx1MUVDRGkgcXV5IHRyXHUwMEVDbmggbFx1MDBFMG0gdmlcdTFFQzdjJyxcclxuICAgIGljb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvbG9nbzMyeDMyLnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICczMngzMicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvbG9nbzY0eDY0LnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICc2NHg2NCcsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvbG9nbzE5MngxOTIucG5nJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnL2xvZ281MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBzdGFydF91cmw6ICcvJyxcclxuICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgIHRoZW1lX2NvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAvLyBcIm1hdGNoZXNcIjogW1xyXG4gICAgLy8gICAgIFwiKjovLyouaXZpd29yay5sb2NhbC8qXCJcclxuICAgIC8vIF1cclxuICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBqc2NvbmZpZ1BhdGgoKSwgc3ZncigpLCBWaXRlUFdBKG1hbmlmZXN0Rm9yUGx1Z2luKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd08sU0FBUyxvQkFBb0I7QUFDclEsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsU0FBUyxlQUErQjtBQUx4QyxJQUFNLG1DQUFtQztBQU96QyxJQUFNLG9CQUE2QztBQUFBLEVBQ2pELGNBQWM7QUFBQSxFQUNkLGVBQWUsQ0FBQyxlQUFlLGVBQWU7QUFBQSxFQUM5QyxVQUFVO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlsQixhQUFhO0FBQUEsRUFDZjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsS0FBSyxHQUFHLFFBQVEsaUJBQWlCLENBQUM7QUFBQSxFQUNyRSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
