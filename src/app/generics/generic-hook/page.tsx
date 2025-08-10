'use client'

import { useLocalStorage } from './hooks/useLocalStorage'
import Button from '@/components/shared/Button'

// * This page shows how to create a generic hook that uses localStorage

export default function Page() {
  const [count, setCount] = useLocalStorage<number>('count', 0)
  const [user, setUser] = useLocalStorage<{ name: string }>('user', {
    name: 'John',
  })

  return (
    <>
      <h1>Generic Hook</h1>

      {/* BEWARE: Suppress hydration warning needed for localStorage */}
      <p suppressHydrationWarning>{count}</p>
      <p suppressHydrationWarning>{user.name}</p>

      <div className='flex gap-2'>
        <Button
          onClick={() => setCount(count + 1)}
          aria-label='Increment count'
          className='px-3'
        >
          +
        </Button>
        <Button
          onClick={() =>
            setUser({ name: user.name === 'John' ? 'Jane' : 'John' })
          }
        >
          Change name
        </Button>
      </div>
    </>
  )
}
