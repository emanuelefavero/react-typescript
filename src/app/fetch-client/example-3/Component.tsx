'use client'

import { baseUrl } from '@/config/baseUrl'
import type { Post } from '@/data/posts'
import { useEffect, useState } from 'react'

export default function Component() {
  const [posts, setPosts] = useState<Post[] | null>(null)
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
  if (!posts) return <div>No posts found</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}
