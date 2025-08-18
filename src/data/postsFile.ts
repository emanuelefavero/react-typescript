import { promises as fs } from 'fs'
import path from 'path'
import type { Post } from './posts'

const postsFile = path.resolve(process.cwd(), 'src/data/posts.json')

export async function readPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(postsFile, 'utf-8')
    return JSON.parse(data)
  } catch {
    // If file doesn't exist, return empty array
    return []
  }
}

export async function writePosts(posts: Post[]): Promise<void> {
  await fs.writeFile(postsFile, JSON.stringify(posts, null, 2), 'utf-8')
}
