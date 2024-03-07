import { createFileRoute } from "@tanstack/react-router"

const PostsPostIdCommentId = () => {
  const { postId, commentId } = Route.useParams()
  return (
    <div>
      Hello /posts/{postId}/comments/{commentId}!{" "}
    </div>
  )
}

export const Route = createFileRoute("/posts/$postId/comments/$commentId")({
  component: PostsPostIdCommentId,
})
