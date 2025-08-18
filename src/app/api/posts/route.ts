import { readPosts } from '@/data/postsFile'

export async function GET() {
  const posts = await readPosts()
  return Response.json(posts)
}
