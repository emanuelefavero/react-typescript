import { readPosts } from '@/utils/posts'

export async function GET() {
  const posts = await readPosts()
  return Response.json(posts)
}
