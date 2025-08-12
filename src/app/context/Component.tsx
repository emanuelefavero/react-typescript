'use client'

import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useId, useState } from 'react'
import { useUserContext } from './UserContext'

export default function Component() {
  const { user, updateUserName } = useUserContext() // * <- useUserContext
  const [newName, setNewName] = useState('')

  const handleUpdateName = () => {
    const trimmedNewName = newName.trim()
    if (trimmedNewName) {
      updateUserName(trimmedNewName) // * <- updateUserName from context
      setNewName('')
    }
  }

  const inputId = useId()

  return (
    <>
      <h2 className='mb-2'>{user.name}</h2>

      <div className='flex max-w-prose flex-col gap-2'>
        <label htmlFor={`newName-${inputId}`} className='sr-only'>
          Update Name:
        </label>

        <Input
          id={`newName-${inputId}`}
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder='Enter new name'
          onKeyUp={(e) => e.key === 'Enter' && handleUpdateName()}
        />

        <Button onClick={handleUpdateName} disabled={!newName.trim()}>
          Update Name
        </Button>
      </div>
    </>
  )
}
