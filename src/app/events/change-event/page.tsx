'use client'

import { type ChangeEvent, useState } from 'react'

// * ChangeEvent is a built-in type in React that represents the event object for change events

export default function Page() {
  const [name, setName] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>ChangeEvent</h1>

      <input
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='Enter your name'
        className='border border-gray-300 rounded-md p-2 mr-2'
      />
      {name}
    </>
  )
}
