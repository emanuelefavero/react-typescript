'use client'

import Button from '@/components/shared/Button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error) // Log the error to an error reporting service
  }, [error])

  return (
    <>
      <h2 className='mb-4'>Something went wrong!</h2>
      <Button
        onClick={
          () => reset() // Re-render the segment
        }
      >
        Try again
      </Button>
    </>
  )
}
