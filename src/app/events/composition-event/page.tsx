'use client'

import Input from '@/components/shared/Input'
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

      <div className='space-y-4 p-4'>
        <Input
          type='text'
          placeholder='Dictate text here...'
          onCompositionEnd={handleCompositionEnd}
        />
        {composedText && (
          <p className='text-blue-600 dark:text-blue-400'>{composedText}</p>
        )}
      </div>
    </>
  )
}
