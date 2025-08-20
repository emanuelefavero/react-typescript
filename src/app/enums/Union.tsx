'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

type Direction = 'Up' | 'Down' | 'Left' | 'Right'

export default function Component() {
  const [direction, setDirection] = useState<Direction>('Up')

  return (
    <>
      <p>Direction: {direction}</p>
      <Button onClick={() => setDirection('Up')}>Up</Button>
      <Button onClick={() => setDirection('Down')}>Down</Button>
      <Button onClick={() => setDirection('Left')}>Left</Button>
      <Button onClick={() => setDirection('Right')}>Right</Button>
    </>
  )
}
