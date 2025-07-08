import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useMicroApps } from "../micro-apps";

export const Route = createRootRoute({
  component: () => {
    const containerId = useMicroApps();

    return (
      <>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "cornsilk",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="/">Home</Link>
            <Link to="/app/$appId" params={{ appId: "kirby-cafe" }}>
              Kirby
            </Link>
            <Link to="/app/$appId" params={{ appId: "pikmin-cafe" }}>
              Pikmin
            </Link>
          </div>
          <hr />
        </div>
        <Outlet />
        <div id={containerId}></div>
      </>
    );
  },
});
