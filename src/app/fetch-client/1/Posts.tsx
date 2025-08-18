'use client'

import type { Post } from '@/types/posts'

export default function Component({ posts }: { posts: Post[] }) {
  return (
    <>
      <h2 className='mb-2 text-xl font-semibold'>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
