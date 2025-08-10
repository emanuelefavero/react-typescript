'use client'

import { type DragEvent, useState } from 'react'

// * DragEvent is a built-in type in React that represents the event object for drag events. It is often used to handle events like drag start, drag over, and drop

export default function Page() {
  const [dragColor, setDragColor] = useState('bg-blue-500')
  const [dropColor, setDropColor] = useState('bg-gray-500')
  const [dropText, setDropText] = useState('Drop Here')

  const handleDragStart = () => {
    setDragColor('bg-red-500') // Change color while dragging
  }

  const handleDragEnd = () => {
    setDragColor('bg-blue-500') // Reset color when drag ends
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDropColor('bg-green-500') // Change color of drop zone when dragging over
  }

  const handleDragLeave = () => {
    setDropColor('bg-gray-500') // Reset drop zone color when leaving
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDropColor('bg-green-500') // Change drop zone color when dropped
    setDropText('Dropped') // Change text when dropped

    // Reset drop zone color and text after a delay
    setTimeout(() => {
      setDropColor('bg-gray-500')
      setDropText('Drop Here')
    }, 500)
  }

  return (
    <>
      <h1>DragEvent</h1>

      <div className='flex flex-col items-center space-y-6 p-4'>
        <div
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`h-24 w-24 ${dragColor} flex cursor-grab items-center justify-center rounded text-white shadow-lg`}
        >
          Drag Me
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`h-32 w-32 ${dropColor} flex items-center justify-center rounded border border-gray-500 text-white shadow-lg`}
        >
          {dropText}
        </div>
      </div>
    </>
  )
}
