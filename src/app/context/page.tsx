import Component from './Component'
import { UserProvider } from './UserContext'

// * @see ./UserContext and ./Component to check how to implement context

export default function Page() {
  return (
    <>
      <h1 className='mb-4'>Context</h1>

      <UserProvider>
        <Component />
      </UserProvider>
    </>
  )
}
