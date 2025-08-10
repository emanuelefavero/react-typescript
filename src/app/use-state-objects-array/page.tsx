'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

type User = {
  name: string
}

// * Typing useState with an array of objects
// TIP: You can also omit the type and let TypeScript infer it

export default function Page() {
  const [users, setUsers] = useState<User[]>([
    { name: 'John' },
    { name: 'Jane' },
  ])

  return (
    <>
      <h1>useState Objects Array</h1>

      <Button
        onClick={() => {
          setUsers((prev) => [{ name: 'New User' }, ...prev])
        }}
      >
        Add User
      </Button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
