'use client'

import Button from '@/components/shared/Button'
import { baseUrl } from '@/config/baseUrl'
import { useEffect, useState } from 'react'

export default function Component() {
  const [likes, setLikes] = useState<number>(0)

  useEffect(() => {
    fetch(`${baseUrl}/api/likes`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
  }, [])

  const handleLike = async () => {
    const res = await fetch(`${baseUrl}/api/likes`, { method: 'POST' })
    const data = await res.json()
    setLikes(data.likes)
  }

  return (
    <>
      <p className='mb-2'>Likes: {likes}</p>
      <Button onClick={handleLike}>Like</Button>
    </>
  )
}
