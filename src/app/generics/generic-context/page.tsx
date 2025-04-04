import { AuthProvider } from './AuthContext'
import Component from './Component'

// * This page shows how to create a generic context (@see ./AuthContext.tsx and ./Component.tsx)

export default function Page() {
  return (
    <>
      <h1>Generic Context</h1>

      <AuthProvider>
        <Component />
      </AuthProvider>
    </>
  )
}
