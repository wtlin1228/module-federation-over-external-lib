# Setup

To run the demo locally:

1. Start **Host**:

   ```sh
   cd host && pnpm i && pnpm build && pnpm preview
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

# Explanation

This demo shows how to integrate **Module Federation** with **[Qiankun](https://qiankun.umijs.org/)** to build a micro-frontend system that supports dynamic runtime loading.

## 1. Expose the Host's Module Federation Runtime

The host app exposes its Module Federation runtime globally so that micro apps can access it:

```tsx
// host/src/bootstrap.tsx

import {
  loadRemote,
  registerRemotes,
} from "@module-federation/enhanced/runtime";

// Expose the host's MF runtime to micro apps
window.__FEDERATION_ENHANCED_RUNTIME__ = {
  loadRemote,
  registerRemotes,
};
```

---

## 2. Define Lifecycle Functions in Micro Apps

Each micro app (e.g., Pikmin) defines `bootstrap`, `mount`, `unmount`, and optionally `update` functions, following Qiankun's contract:

```tsx
// pikmin/src/lifecycles.tsx

import { loadRemote, registerRemotes } from "mf-runtime";

let root: any = null;

export async function bootstrap() {
  registerRemotes([
    {
      name: "pikmin",
      entry: `app/pikmin/mf-manifest.json`,
    },
  ]);
}

export async function mount(props: { container?: HTMLElement }) {
  const { renderToContainer } = await loadRemote("pikmin");

  if (!root) {
    const container = props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root");
    root = renderToContainer(container);
  }
}

export async function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}

export async function update(props: any) {
  console.log("pikmin update", props);
}
```

---

## 3. Expose Lifecycles as Global Variables

Each micro app must expose its lifecycle functions globally for Qiankun to invoke:

```ts
// In the entry file (e.g. pikmin/src/index.ts)

import * as lifecycles from "./lifecycles";

window.__APP_PIKMIN_LIFECYCLES__ = lifecycles;
```

---

## 4. Register Micro Apps in the Host

The host uses Qiankun’s API to register and start the micro apps:

```tsx
// host/src/useMicroApps.tsx

import { type RegistrableApp, registerMicroApps, start } from "qiankun";
import { useEffect } from "react";

const APP_CONTAINER = "app-container";

const registerableApps: RegistrableApp<{ displayName: string }>[] = [
  {
    name: "__APP_KIRBY_LIFECYCLES__",
    entry: "/app/kirby/index.html",
    container: `#${APP_CONTAINER}`,
    activeRule: "/app/kirby-cafe",
  },
  {
    name: "__APP_PIKMIN_LIFECYCLES__",
    entry: "/app/pikmin/index.html",
    container: `#${APP_CONTAINER}`,
    activeRule: "/app/pikmin-cafe",
  },
];

export const useMicroApps = () => {
  useEffect(() => {
    registerMicroApps(registerableApps);
    start({ prefetch: false });
  }, []);

  return APP_CONTAINER;
};
```

# Unsloved Problems

## Avoid bundling and loading the MF's runtime twice

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Rsbuild App</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TODO: find a way to exclude the MF runtime here -->
    <!-- <script defer src="/app/pikmin/static/js/585.835364e9.js"></script> -->
    <script defer src="/app/pikmin/static/js/index.0485dd91.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```js
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports

// TODO: find a way to exclude the MF runtime here
// __webpack_require__.O(undefined, ["585"], function() { return __webpack_require__(550) });
// var __webpack_exports__ = __webpack_require__.O(undefined, ["585"], function() { return __webpack_require__(646) });

var __webpack_exports__ = __webpack_require__.O(undefined, [], function () {
  return __webpack_require__(646);
});
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
```
