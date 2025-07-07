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
