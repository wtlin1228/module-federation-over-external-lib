import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default createModuleFederationConfig({
  name: "kirby",
  exposes: {
    ".": "./src/components/exposed.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    // specify the version manually for demo purpose
    lodash: "^4.0.0",
    // lodash: dependencies.lodash,
  },
  getPublicPath: `function() { return "/app/kirby/"; }`,
});
