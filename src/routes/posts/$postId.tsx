import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId")({
  component: PostsPostId,
})

function PostsPostId() {
  const { postId } = Route.useParams()
  return <div>Hello /posts/{postId}! </div>
}
