'use client'

import { type CompositionEvent, useState } from 'react'

// * CompositionEvent is a built-in type in React that represents the event object for composition events. It is often used to handle events related to text input, especially when using Input Method Editors (IMEs) for languages like Chinese, Japanese, or Korean. It is also used to handle dictation

export default function CompositionExample() {
  const [composedText, setComposedText] = useState('')

  const handleCompositionEnd = (event: CompositionEvent<HTMLInputElement>) => {
    setComposedText(event.data)
  }

  return (
    <>
      <h1>CompositionEvent</h1>

      <div className='p-4 space-y-4'>
        <input
          type='text'
          placeholder='Dictate text here...'
          onCompositionEnd={handleCompositionEnd}
          className='border p-2 rounded w-full'
        />
        {composedText && <p className='text-blue-600'>{composedText}</p>}
      </div>
    </>
  )
}
