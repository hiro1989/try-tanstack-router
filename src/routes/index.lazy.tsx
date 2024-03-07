import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return <h1>Welcome Home!</h1>
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
