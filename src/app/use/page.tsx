import { baseUrl } from '@/config/baseUrl'

async function getPosts() {
  const response = await fetch(`${baseUrl}/api/posts`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  return response.json()
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: string; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
