'use client'

import type { Post } from '@/types/posts'
import { use } from 'react'

// * ...and pass the promise to your Client Component as prop:

export default function Component({ posts }: { posts: Promise<Post[]> }) {
  const allPosts = use(posts)

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}
