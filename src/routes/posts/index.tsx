import { Link, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/")({
  component: Posts,
})

function Posts() {
  return (
    <div>
      <h3>Hello /posts/!</h3>
      <ul>
        <li>
          <Link
            to="/posts/$postId"
            params={{
              postId: "apollo-11",
            }}
          >
            Apollo 11
          </Link>
        </li>
        <li>
          <Link
            to="/posts/$postId"
            params={{
              postId: "apollo-12",
            }}
          >
            Apollo 12
          </Link>
        </li>
        <li>
          <Link
            to="/posts/$postId"
            params={{
              postId: "apollo-13",
            }}
          >
            Apollo 13
          </Link>
        </li>
      </ul>
    </div>
  )
}