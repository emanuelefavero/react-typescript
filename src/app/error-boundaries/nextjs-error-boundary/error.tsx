'use client'

import Button from '@/components/shared/Button'
import { useEffect } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error) // Log the error to an error reporting service
  }, [error])

  return (
    <>
      <h2 className='mb-4'>Something went wrong!</h2>
      <Button
        className='bg-green-600 hover:bg-green-700'
        onClick={
          () => reset() // Re-render the segment
        }
      >
        Try again
      </Button>
    </>
  )
}
