'use client'

import { type MouseEvent, useState } from 'react'

// * MouseEvent is a built-in type in React that represents the event object for mouse events. It is often used to handle events like clicks

export default function Page() {
  const [clicked, setClicked] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClicked((prevClicked) => !prevClicked)

    console.log('MouseEvent:', event)
  }

  return (
    <>
      <h1>MouseEvent</h1>

      <button
        onClick={handleClick}
        className={`${
          clicked ? 'bg-green-600' : 'bg-blue-600'
        } text-white rounded-md p-2 cursor-pointer`}
      >
        {clicked ? 'Clicked' : 'Click Me'}
      </button>
    </>
  )
}
