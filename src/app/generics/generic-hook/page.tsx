'use client'

import { useLocalStorage } from './hooks/useLocalStorage'

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

      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() =>
          setUser({ name: user.name === 'John' ? 'Jane' : 'John' })
        }
      >
        Change name
      </button>
    </>
  )
}
