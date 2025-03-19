// * Interfaces
// Interfaces can be used to define object types instead of using type aliases
interface User {
  name: string
}

// The advantage of using interfaces is that they can be extended
interface Admin extends User {
  role: 'admin'
}

// Interfaces can also be used with classes with the `implements` keyword
class Person implements User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

// TIP: Interfaces are often uses when working with libraries and third-party code because you often need to extend or implement types instead of creating new ones or modifying existing ones

export default function Page() {
  const user: User = {
    name: 'John',
  }

  const admin: Admin = {
    name: 'Jane',
    role: 'admin',
  }

  const person = new Person('Alice')

  return (
    <>
      <h1>Interfaces</h1>

      <p>{user.name}</p>

      <p>{admin.name}</p>
      <p>{admin.role}</p>

      <p>{person.name}</p>
    </>
  )
}
