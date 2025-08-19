'use client'

import Button from '@/components/shared/Button'
import { baseUrl } from '@/config/baseUrl'
import { startTransition, useEffect, useOptimistic, useState } from 'react'

export default function Component() {
  const [likes, setLikes] = useState<number>(0)

  // optimistic hook: we define how the state should update optimistically
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (state, newLike: number) => state + newLike,
  )

  // Show initial likes
  useEffect(() => {
    fetch(`${baseUrl}/api/likes`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
  }, [])

  // * Update like optimistically
  const handleLike = async () => {
    startTransition(() => {
      addOptimisticLike(1) // Update UI instantly
    })

    // Send request to server
    try {
      const res = await fetch(`${baseUrl}/api/likes`, { method: 'POST' })
      const data = await res.json()
      setLikes(data.likes) // Reconcile with server state
    } catch (error) {
      console.error(error)
      setLikes(likes) // If the request fails, reset to the previous likes count
    }
  }

  return (
    <>
      <p className='mb-2'>Likes: {optimisticLikes}</p>
      <Button onClick={handleLike}>Like</Button>
    </>
  )
}
