import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/_authenticated")({
  component: () => <Outlet />,
  beforeLoad: () => {
    // like login guard
    console.log("beforeLoad")
    throw redirect({
      to: "/about",
    })
  },
})
