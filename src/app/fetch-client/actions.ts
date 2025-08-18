'use server'

import type { Post } from '@/types/posts'
import { readPosts, writePosts } from '@/utils/posts'
import { revalidatePath } from 'next/cache'

type AddPostResponse = Promise<{ success?: boolean; error?: string }>

export async function addPost(formData: FormData): AddPostResponse {
  // Get title and content from form data
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!title || !content) return { error: 'Title and content are required' }

  // Create a new post object
  const newPost: Post = {
    id: crypto.randomUUID(),
    title,
    content,
  }

  // Read current posts from file
  const posts = await readPosts()

  // Add the new post to the array
  posts.push(newPost)

  // Write the updated posts array back to the file
  await writePosts(posts)

  revalidatePath('/fetch-client') // Update the post list cache

  return { success: true }
}
