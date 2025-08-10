'use client'

import { type ClipboardEvent, useState } from 'react'

// * ClipboardEvent is a built-in type in React that represents the event object when a clipboard event occurs. It is often used to handle events like copy, cut, and paste

export default function Page() {
  const [copiedText, setCopiedText] = useState('')

  const handleCopy = (event: ClipboardEvent<HTMLInputElement>) => {
    const text = document.getSelection()?.toString() || ''
    setCopiedText(text)

    console.log('ClipboardEvent:', event)
  }

  return (
    <>
      <h1>ClipboardEvent</h1>

      <div onCopy={handleCopy} className='mt-4 rounded-md bg-blue-500/10 p-4'>
        <p className='text-slate-600 dark:text-slate-400'>
          Select some text in this box and press <strong>Ctrl + C</strong> or{' '}
          <strong>Command + C</strong> to copy it. The copied text will be
          displayed below.
        </p>
      </div>
      {copiedText && (
        <p className='text-green-600'>Copied text: {copiedText}</p>
      )}
    </>
  )
}
