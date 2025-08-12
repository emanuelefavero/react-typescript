'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

export default function Page() {
  // Inferred type is number, no need to specify it explicitly
  const [count, setCount] = useState(0)

  // ---

  // * For types that are initialized as null, use a union type
  type User = {
    name: string
    age: number
  }
  const [user, setUser] = useState<User | null>(null)
  // TIP: You can also use type assertions: `useState<User>({} as User)`

  return (
    <>
      <h1>useState</h1>
      <p>Current count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>

      <Button onClick={() => setUser({ name: 'John', age: 30 })}>
        Set User
      </Button>

      {user && (
        <>
          <p>User Name: {user.name}</p>
          <p>User Age: {user.age}</p>
        </>
      )}
    </>
  )
}
