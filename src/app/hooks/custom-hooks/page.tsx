'use client'

import Button from '@/components/shared/Button'
import { useLoading } from './useLoading'

// * @see ./useLoading for custom hooks implementation

export default function Page() {
  const [loading, load] = useLoading()

  const handleClick = async () => {
    await load(new Promise((resolve) => setTimeout(resolve, 500)))
  }

  return (
    <>
      <h1>Custom Hooks</h1>

      <Button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Click me'}
      </Button>
    </>
  )
}
