import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";
import path from "path";

export default defineConfig({
  output: {
    minify: false,
    assetPrefix: "/app/kirby/",
    externals: {
      "mf-runtime": "__FEDERATION_ENHANCED_RUNTIME__",
    },
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig, {})],
  server: {
    port: 3001,
  },
  tools: {
    rspack: {
      // output to host
      output: {
        clean: true,
        path: path.resolve(__dirname, "../host/public/app/kirby"),
        publicPath: "/app/kirby/",
      },
    },
  },
});
