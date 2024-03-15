import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/_authenticated")({
  component: () => <Outlet />,
  beforeLoad: ({ location }) => {
    // like login guard
    console.log("beforeLoad:" + location.pathname)
    redirect({
      to: "/about",
      search: {
        redirect: location.pathname,
      },
    })
  },
})
