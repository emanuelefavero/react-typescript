'use client'

import { type FocusEvent, useState } from 'react'

// * FocusEvent is a built-in type in React that represents the event object for focus events

export default function Page() {
  const [focused, setFocused] = useState(false)

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    console.log('FocusEvent:', event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    console.log('BlurEvent:', event)
  }

  return (
    <>
      <h1>FocusEvent</h1>

      <input
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Click to focus'
        className={`${
          focused ? 'bg-green-600' : 'bg-blue-600'
        } text-white rounded-md p-2 mt-4`}
      />
      <p className='mt-2'>
        {focused ? 'Input is focused' : 'Click the input to focus it'}
      </p>
    </>
  )
}
