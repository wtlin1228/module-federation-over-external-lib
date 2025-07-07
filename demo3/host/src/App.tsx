import { RouterProvider, createRouter } from "@tanstack/react-router";
import { init } from "@module-federation/enhanced/runtime";
import "./App.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

init({
  name: "host",
  remotes: [],
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
