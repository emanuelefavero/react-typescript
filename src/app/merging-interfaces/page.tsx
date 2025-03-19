interface User {
  name: string
}

interface Author {
  permissions: string[]
}

// * Merging Interfaces
// Interfaces can be merged with the `extends` keyword
interface Admin extends User, Author {}

export default function Page() {
  const admin: Admin = {
    name: 'John',
    permissions: ['read', 'write'],
  }

  return (
    <>
      <h1>Merging Interfaces</h1>

      <p>{admin.name}</p>
      <p>{admin.permissions.join(', ')}</p>
    </>
  )
}
