'use client'

import Button from '@/components/shared/Button'
import { useState } from 'react'

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

export default function Component() {
  const [direction, setDirection] = useState<Direction>(Direction.Up)

  return (
    <>
      <p>Direction: {direction}</p>
      <Button onClick={() => setDirection(Direction.Up)}>Up</Button>
      <Button onClick={() => setDirection(Direction.Down)}>Down</Button>
      <Button onClick={() => setDirection(Direction.Left)}>Left</Button>
      <Button onClick={() => setDirection(Direction.Right)}>Right</Button>
    </>
  )
}
