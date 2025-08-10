'use client'

import Input from '@/components/shared/Input'
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

      <Input
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Click to focus'
        className={focused ? 'bg-blue-600/20' : ''}
      />
      <p className='mt-2'>
        {focused ? 'Input is focused' : 'Click the input to focus it'}
      </p>
    </>
  )
}
