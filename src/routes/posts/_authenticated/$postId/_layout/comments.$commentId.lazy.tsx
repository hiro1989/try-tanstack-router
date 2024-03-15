import { createLazyFileRoute } from "@tanstack/react-router"

const PostsPostIdCommentId = () => {
  const { postId, commentId } = Route.useParams()
  return (
    <div>
      Hello /posts/{postId}/comments/{commentId}!{" "}
    </div>
  )
}

export const Route = createLazyFileRoute(
  "/posts/_authenticated/$postId/_layout/comments/$commentId",
)({
  component: PostsPostIdCommentId,
})
