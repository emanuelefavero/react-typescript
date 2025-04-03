'use client'

import { type KeyboardEvent, useState } from 'react'

export default function Page() {
  const [numbers, setNumbers] = useState<number[]>([])

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      setNumbers((prevNumbers) => {
        const newNumber = prevNumbers.length + 1
        return [...prevNumbers, newNumber]
      })
    } else if (event.key === 'Backspace') {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers]
        newNumbers.pop()
        return newNumbers
      })
    } else return
  }

  return (
    <>
      <h1>KeyboardEvent</h1>

      <div
        onKeyDown={handleKeyPress}
        tabIndex={0}
        className='w-full min-h-96 bg-blue-500/10 rounded-md p-4 outline-none focus:border-2 focus:border-blue-500/20 mt-4'
      >
        <p className='text-slate-600 dark:text-slate-400'>
          Click here and press <strong>Enter</strong> to add a number or{' '}
          <strong>Backspace</strong> to remove the last number.
        </p>

        {numbers.map((number, index) => (
          <div key={index}>
            <p>{number}</p>
          </div>
        ))}
      </div>
    </>
  )
}
