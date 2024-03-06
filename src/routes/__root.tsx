import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { lazy, Suspense } from "react"

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    )

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <hr />
      <Outlet />

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
