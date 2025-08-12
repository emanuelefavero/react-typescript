'use client'

import Input from '@/components/shared/Input'
import { useEffect, useRef } from 'react'

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    focus(inputRef)
  }, [])

  const focus = (ref: typeof inputRef) => ref.current?.focus()
  // TIP: You can also use `(ref: React.RefObject<HTMLInputElement | null>)`

  return (
    <>
      <h1>useRef</h1>

      <Input type='text' ref={inputRef} placeholder='Text' />
    </>
  )
}
