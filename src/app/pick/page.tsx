// * Pick let's you select specific keys from a type

type User = {
  id: number
  name: string
  email: string
  age: number
}

type UserWithName = Pick<User, 'name'>
// { name: string; }

// --------------------------------

// TIP: To recreate Pick, we can use mapped types

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type UserWithEmail = MyPick<User, 'email'>
// { email: string; }

export default function Page() {
  const userWithName: UserWithName = {
    name: 'John',
  }

  const userWithEmail: UserWithEmail = {
    email: 'john@example.com',
  }

  return (
    <>
      <h1>Pick</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify({ userWithName, userWithEmail }, null, 2)}
      </pre>
    </>
  )
}
