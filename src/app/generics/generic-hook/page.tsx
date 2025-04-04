'use client'

import { useLocalStorage } from './hooks/useLocalStorage'
import Button from '@/components/Button'

export default function Page() {
  const [count, setCount] = useLocalStorage<number>('count', 0)
  const [user, setUser] = useLocalStorage<{ name: string }>('user', {
    name: 'John',
  })

  return (
    <>
      <h1>Generic Hook</h1>

      <p>{count}</p>
      <p>{user.name}</p>

      <Button onClick={() => setCount(count + 1)} aria-label='Increment count'>
        +
      </Button>
      <Button
        onClick={() =>
          setUser({ name: user.name === 'John' ? 'Jane' : 'John' })
        }
      >
        Change name
      </Button>
    </>
  )
}
