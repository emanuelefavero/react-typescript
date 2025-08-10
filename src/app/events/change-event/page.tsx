'use client'

import { type ChangeEvent, useState } from 'react'
import Input from '@/components/shared/Input'

// * ChangeEvent is a built-in type in React that represents the event object for change events

export default function Page() {
  const [name, setName] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>ChangeEvent</h1>

      <Input
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='Enter your name'
      />
      {name}
    </>
  )
}
