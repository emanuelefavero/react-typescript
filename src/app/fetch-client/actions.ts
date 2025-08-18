'use server'

import type { Post } from '@/types/posts'
import { readPosts, writePosts } from '@/utils/posts'
import { revalidatePath } from 'next/cache'

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
