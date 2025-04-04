'use client'

import { useRef } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'

// * useRef is a built-in hook in React that allows you to create a mutable reference to a DOM element or a value that persists across renders. It returns a ref object with a current property that can be used to access the referenced element or value

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      <h1>useRef</h1>

      <div className='flex flex-col max-w-prose gap-2'>
        <Input
          type='text'
          ref={inputRef}
          placeholder='Click the button to focus me'
        />

        <Button onClick={handleClick}>Focus Input</Button>
        <Button
          onClick={() => {
            // TIP: You can use the non-null assertion operator (!) to tell TypeScript that the value is not null
            inputRef.current!.value = ''
          }}
        >
          Clear Input
        </Button>
      </div>
    </>
  )
}
