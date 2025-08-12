'use client'

import Button from '@/components/shared/Button'
import { useReducer } from 'react'

// * Reducer
const initialState = { count: 0 }
type Action = { type: 'increment' } | { type: 'decrement' }

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count === 0 ? 0 : state.count - 1 }
    default:
      return state
  }
}

// ---

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>useReducer</h1>

      <p>Current count: {state.count}</p>
      <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
    </>
  )
}
