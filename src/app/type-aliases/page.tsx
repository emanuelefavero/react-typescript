// * Type Aliases can be used to create a custom type. They are used often to define object types, union types, and function types
// Type Aliases with Objects
type User = {
  name: string
}

// Type Aliases with Union Types
type Status = 'active' | 'inactive'

// Type Aliases with Function Types
type Add = (a: number, b: number) => number

export default function Page() {
  const user: User = {
    name: 'John',
  }
  const status: Status = 'active'
  const add: Add = (a, b) => a + b

  return (
    <>
      <h1>Type Aliases</h1>

      <p>{user.name}</p>
      <p>{status}</p>
      <p>{add(1, 2)}</p>
    </>
  )
}
