'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthContextType<T> = {
  user: T | null
  setUser: (user: T | null) => void
}

type User = {
  id: number
  name: string
}

const AuthContext = createContext<AuthContextType<User> | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// * Custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext)
