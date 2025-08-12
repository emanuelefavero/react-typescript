'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface User {
  id: number
  name: string
}

interface UserContextType {
  user: User
  updateUserName: (name: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

// * useUserContext
export function useUserContext() {
  const context = useContext(UserContext)

  // TIP: To avoid the if statement, you can also use type assertions:
  // 1. return context!
  // 2. return context as UserContextType
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}

interface Props {
  children: ReactNode
}

// * UserProvider
export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John',
  })

  const updateUserName = (name: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      name,
    }))
  }

  const value: UserContextType = {
    user,
    updateUserName,
  }

  return <UserContext value={value}>{children}</UserContext>
}
