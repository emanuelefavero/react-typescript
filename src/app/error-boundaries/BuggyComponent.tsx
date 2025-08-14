import Button from '@/components/shared/Button'
import { useState } from 'react'

export default function Component() {
  const [throwError, setThrowError] = useState(false)

  if (throwError) {
    throw new Error('Error from BuggyComponent')
  }

  return (
    <>
      <Button
        onClick={() => {
          setThrowError(true)
        }}
      >
        Throw Error
      </Button>
    </>
  )
}
