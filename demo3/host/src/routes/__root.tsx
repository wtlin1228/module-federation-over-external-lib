import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
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
          <Link to="/app/$appId" params={{ appId: "kirby" }}>
            Kirby
          </Link>
          <Link to="/app/$appId" params={{ appId: "pikmin" }}>
            Pikmin
          </Link>
        </div>
        <hr />
      </div>
      <Outlet />
    </>
  ),
});
