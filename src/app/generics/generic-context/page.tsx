import { AuthProvider } from './AuthContext'
import Component from './Component'

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
