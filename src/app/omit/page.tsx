// * Omit <Type, Keys> allows you to remove specific keys from a type

type User = {
  id: number
  name: string
  email: string
  age: number
}

type UserWithoutEmail = Omit<User, 'email'>
// { id: number; name: string; age: number; }

// --------------------------------

// TIP: To recreate Omit, we can use Pick and Exclude
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type UserWithoutAge = MyOmit<User, 'age'>
// { id: number; name: string; email: string; }

// --------------------------------

// TIP: We can also simply use Pick to achieve the same result as Omit, by simply selecting the keys we want to keep
type UserWithoutId = Pick<User, 'name' | 'email' | 'age'>
// { name: string; email: string; age: number; }

export default function Page() {
  const userWithoutEmail: UserWithoutEmail = {
    id: 1,
    name: 'John',
    age: 30,
  }

  const userWithoutAge: UserWithoutAge = {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
  }

  const userWithoutId: UserWithoutId = {
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
  }

  return (
    <>
      <h1>Omit</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify(
          { userWithoutEmail, userWithoutAge, userWithoutId },
          null,
          2,
        )}
      </pre>
    </>
  )
}
