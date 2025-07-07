import { createFileRoute } from "@tanstack/react-router";
import {
  loadRemote,
  registerRemotes,
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
