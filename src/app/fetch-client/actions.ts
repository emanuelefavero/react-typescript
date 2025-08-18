'use server'

import { Post } from '@/data/posts'
import { readPosts, writePosts } from '@/data/postsFile'
import { revalidatePath } from 'next/cache'

// TODO Convert the posts to json and write the file to the filesystem so the new post can persist. (You also have to update the /api/posts route to read from the file instead of the in-memory array)

export async function addPost(
  formData: FormData,
): Promise<{ success?: boolean; error?: string }> {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!title || !content) {
    return { error: 'Title and content are required' }
  }

  const newPost: Post = {
    id: crypto.randomUUID(),
    title,
    content,
  }
  // Read current posts from file
  const posts = await readPosts()
  posts.push(newPost)
  await writePosts(posts)
  revalidatePath('/fetch-client') // Update the post list cache
  return { success: true }
}
