# Setup

To run the demo locally:

1. Start **Host**:

   ```sh
   cd host && pnpm i && pnpm build && pnpm preview
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

# Explanation

This demo shows how to **dynamically register remote modules** at runtime using `@module-federation/enhanced/runtime`.

### Dynamic Route Loading

In the `/app/$appId` route, we dynamically register and load the remote based on the route parameter:

```tsx
// src/routes/app/$appId.tsx

import { createFileRoute } from "@tanstack/react-router";
import {
  registerRemotes,
  loadRemote,
} from "@module-federation/enhanced/runtime";

export const Route = createFileRoute("/app/$appId")({
  loader: ({ params }) => {
    registerRemotes([
      {
        name: params.appId,
        entry: `app/${params.appId}/mf-manifest.json`,
      },
    ]);
    return loadRemote(params.appId);
  },
  component: AppComponent,
});

function AppComponent() {
  const { Exposed } = Route.useLoaderData();
  return <Exposed />;
}
```

This allows you to support dynamic remotes like `/app/kirby`, `/app/pikmin`, etc., without hardcoding them into the federation config.

---

### ⚙️ Initialization Required

Since you're using `registerRemotes`, you must first call `init()` before loading remotes:

```tsx
// src/app.tsx

import { init } from "@module-federation/enhanced/runtime";

init({
  name: "host",
  remotes: [],
});
```

> This step sets up the host's name and initializes the shared scope. Without it, the runtime won't be able to register or resolve remote modules correctly.
