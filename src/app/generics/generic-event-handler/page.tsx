'use client'

import { type ChangeEvent, useState } from 'react'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'

export default function Page() {
  const [name, setName] = useState('')

  const handleChange = <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(
    event: ChangeEvent<T>
  ) => {
    const value = event.target.value

    setName(value)
  }

  return (
    <>
      <h1>Generic Event Handler</h1>

      <div className='flex flex-col max-w-prose gap-2'>
        <Input
          type='text'
          value={name}
          onChange={handleChange}
          placeholder='Enter your name'
        />

        <TextArea
          value={name}
          onChange={handleChange}
          placeholder='Enter your name'
        />

        <select
          value={name}
          onChange={handleChange}
          className='border border-gray-300 rounded-md p-2 mr-2'
        >
          <option value=''>Select a name</option>
          <option value='John'>John</option>
          <option value='Jane'>Jane</option>
        </select>

        <p className='text-green-600 dark:text-green-400'>{name}</p>
      </div>
    </>
  )
}
