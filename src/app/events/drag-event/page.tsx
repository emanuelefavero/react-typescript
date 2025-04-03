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
    <div className='p-4 space-y-6 flex flex-col items-center'>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`w-24 h-24 ${dragColor} text-white flex items-center justify-center rounded shadow-lg cursor-grab`}
      >
        Drag Me
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-32 h-32 ${dropColor} flex items-center justify-center rounded shadow-lg border border-gray-500 text-white`}
      >
        {dropText}
      </div>
    </div>
  )
}
