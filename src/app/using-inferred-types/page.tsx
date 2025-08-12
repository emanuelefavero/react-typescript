'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

export default function Page() {
  const [posts, setPosts] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Title 1',
      content: 'Content 1',
    },
  ])

  const newPost = {
    id: crypto.randomUUID(),
    title: 'New Title',
    content: 'New Content',
  }

  // * Use `typeof` to get the inferred type of `newPost`
  // TIP: With `typeof`, you can capture the shape of the object without explicitly defining the type
  const addNewPost = (post: typeof newPost) =>
    setPosts((prev) => [post, ...prev])

  return (
    <>
      <h1>Using Inferred Types</h1>

      {posts.length < 2 && (
        <Button onClick={() => addNewPost(newPost)}>Add New Post</Button>
      )}

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}
