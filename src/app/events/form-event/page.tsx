'use client'

import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
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
        <Input type='text' name='name' placeholder='Enter your name' required />
        <Button
          type='submit'
          className='cursor-pointer rounded-md bg-blue-500 p-2 text-white'
        >
          Add User
        </Button>
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
