'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

// * This component simply throws an error when the button is clicked

export default function Component() {
  const [throwError, setThrowError] = useState(false)

  if (throwError) {
    throw new Error('Error from BuggyComponent')
  }

  return (
    <>
      <Button
        className='bg-amber-600 hover:bg-amber-700'
        onClick={() => {
          setThrowError(true)
        }}
      >
        Throw Error
      </Button>
    </>
  )
}
