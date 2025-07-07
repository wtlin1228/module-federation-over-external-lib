# Setup

To run the demo locally:

1. Start **Kirby**:

   ```sh
   cd kirby && pnpm i && pnpm build && pnpm preview
   ```

2. Start **Pikmin**:

   ```sh
   cd pikmin && pnpm i && pnpm build && pnpm preview
   ```

3. Start **Host**:

   ```sh
   cd host && pnpm i && pnpm build && pnpm preview
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

# Explanation

This demo shows how to integrate **Module Federation** with `@tanstack/react-router`. In this case, we don't need to manually call `init` since the `remotes` configuration in `module-federation.config.ts`, remote manifests are automatically known at runtime:

```ts
// module-federation.config.ts
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  remotes: {
    kirby: "kirby@http://localhost:3001/mf-manifest.json",
    pikmin: "pikmin@http://localhost:3002/mf-manifest.json",
  },
});
```

## Dynamic Routing with `/app/:appId`

We use a dynamic route (`/app/$appId`) in `tanstack-router` to load the appropriate remote app:

```tsx
// src/routes/app/$appId.tsx
import { createFileRoute } from "@tanstack/react-router";
import { loadRemote } from "@module-federation/enhanced/runtime";

export const Route = createFileRoute("/app/$appId")({
  loader: ({ params }) => loadRemote(params.appId),
  component: AppComponent,
});

function AppComponent() {
  const { Exposed } = Route.useLoaderData();
  return <Exposed />;
}
```
