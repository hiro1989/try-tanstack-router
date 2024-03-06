import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId/comments/$commentId")({
  component: PostsPostIdCommentId,
})

function PostsPostIdCommentId() {
  const { postId, commentId } = Route.useParams()
  return (
    <div>
      Hello /posts/{postId}/comments/{commentId}!{" "}
    </div>
  )
}
