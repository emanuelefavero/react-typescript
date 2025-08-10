'use client'

import { useEffect, useRef } from 'react'
import Input from './Input'

// TIP: @see ./Input to view ComponentPropsWithRef in action

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <h1>ComponentProps</h1>

      <Input className='mb-4' placeholder='Enter text' ref={inputRef} />
    </>
  )
}
