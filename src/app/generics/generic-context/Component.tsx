'use client'

import { useState } from 'react'
import { useAuthContext } from './AuthContext'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function Component() {
  const [name, setName] = useState('')
  const auth = useAuthContext()
  if (!auth) return <p>No auth context found</p>

  const { user, setUser } = auth

  return (
    <div className='flex flex-col max-w-prose gap-2'>
      <p>User: {user ? user.name : 'No user'}</p>

      <Input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Enter your name'
      />
      <Button
        onClick={() =>
          setUser({
            id: user?.id ? user.id + 1 : 1,
            name,
          })
        }
      >
        Set User
      </Button>
      <Button
        onClick={() => {
          setUser(null)
          setName('')
        }}
      >
        Remove User
      </Button>
    </div>
  )
}
