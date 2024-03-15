import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/_authenticated/$postId/_layout")({
  component: () => (
    <div>
      <div>Yo Layout</div>
      <Outlet />
    </div>
  ),
})
