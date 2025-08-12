'use client'

import { useState } from 'react'

export function useLoading() {
  const [loading, setLoading] = useState(false)

  const load = async (promise: Promise<unknown>) => {
    setLoading(true)
    try {
      return await promise
    } finally {
      setLoading(false)
    }
  }

  return [loading, load] as const
  // ? `as const` infers `[boolean, typeof load]` instead of `(boolean | typeof load)[]`
}
