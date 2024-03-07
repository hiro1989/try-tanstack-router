import { createLazyFileRoute } from "@tanstack/react-router"

const About = () => {
  return <h2>About page</h2>
}

export const Route = createLazyFileRoute("/about")({
  component: About,
})
