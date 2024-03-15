import { Link, createLazyFileRoute } from "@tanstack/react-router"

const PostsPostId = () => {
  const { postId } = Route.useParams()
  console.log({ postId })
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

export const Route = createLazyFileRoute(
  "/posts/_authenticated/$postId/_layout/",
)({
  component: PostsPostId,
})
