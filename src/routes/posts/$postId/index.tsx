import { Link, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId/")({
  component: PostsPostId,
})

function PostsPostId() {
  const { postId } = Route.useParams()
  return (
    <div>
      <div>Hello /posts/{postId}!</div>
      <div>
        <Link
          to="/posts/$postId/comments/$commentId"
          params={{
            postId: postId,
            commentId: Math.random().toString(36).substring(7),
          }}
        >
          See random comments
        </Link>
      </div>
    </div>
  )
}
