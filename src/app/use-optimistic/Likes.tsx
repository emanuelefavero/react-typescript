'use client'

import Button from '@/components/shared/Button'
import { baseUrl } from '@/config/baseUrl'
import { startTransition, useEffect, useOptimistic, useState } from 'react'

export default function Component() {
  const [likes, setLikes] = useState(0)

  // Initialize optimistic likes
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes)

  // Fetch initial likes
  useEffect(() => {
    fetch(`${baseUrl}/api/likes`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes)
      })
  }, [])

  // Like action
  const likeAction = async () => {
    // Set optimistic likes to update the UI immediately
    startTransition(() => {
      setOptimisticLikes(optimisticLikes + 1)
    })

    // Send the like action to the server
    try {
      const res = await fetch(`${baseUrl}/api/likes`, { method: 'POST' })
      const data = await res.json()

      setLikes(data.likes) // Update the likes state
    } catch {
      setLikes(likes) // Revert to the previous likes state if error
    }
  }

  return (
    <>
      {/* Show optimistic likes */}
      <p className='mb-2'>Likes: {optimisticLikes}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          likeAction()
        }}
      >
        <Button type='submit'>Like</Button>
      </form>
    </>
  )
}
