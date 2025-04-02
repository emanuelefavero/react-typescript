'use client'

import { type FormEvent, useState } from 'react'

type User = {
  name: string
}

// * FormEvent is a built-in type in React that represents the event object for form events

export default function Page() {
  const [users, setUsers] = useState<User[]>([])

  const handleAddUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string

    setUsers((prevUsers) => [...prevUsers, { name }])

    form.reset()
  }

  return (
    <>
      <h1>FormEvent</h1>

      <form onSubmit={handleAddUser}>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          required
          className='border border-gray-300 rounded-md p-2 mr-2'
        />
        <button
          type='submit'
          className='cursor-pointer bg-blue-500 text-white rounded-md p-2'
        >
          Add User
        </button>
      </form>

      <ul>
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
