type User = {
  name: string
}

type Author = {
  permissions: string[]
}

// * Merging Types
// Types can be merged to create a new type that has the properties of both merged types
type Admin = User & Author

export default function Page() {
  // TIP: The Admin type now has the properties of both the User and Author
  const admin: Admin = {
    name: 'John',
    permissions: ['read', 'write'],
  }

  return (
    <>
      <h1>Merging Types</h1>

      <p>{admin.name}</p>
      <p>{admin.permissions.join(', ')}</p>
    </>
  )
}
