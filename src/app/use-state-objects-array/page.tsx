'use client'

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

      <button
        className='bg-blue-500 text-white p-2 rounded cursor-pointer'
        onClick={() => {
          setUsers((prev) => [{ name: 'New User' }, ...prev])
        }}
      >
        Add User
      </button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
