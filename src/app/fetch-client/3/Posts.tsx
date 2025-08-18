'use client'

import { baseUrl } from '@/config/baseUrl'
import type { Post } from '@/types/posts'
import { useEffect, useState } from 'react'

export default function Component() {
  // TIP: Initializing with an empty array is valid even though `Post` has required fields since TypeScript only checks the types when you actually put something in the array
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${baseUrl}/api/posts`)
      const data = await res.json()
      setPosts(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (posts.length === 0) return <div>No posts found</div>

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
