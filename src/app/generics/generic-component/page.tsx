import List from './List'

// * Generics can be used to create reusable components that can work with any data type. Here we created a List component that can render a list of any type of items

export default function Page() {
  const numbers = [1, 2, 3, 4]
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]

  return (
    <>
      <h1>Generic Component</h1>

      <h2>Numbers</h2>
      <List items={numbers} renderItem={(item) => <li key={item}>{item}</li>} />

      <h2>Users</h2>
      <List
        items={users}
        renderItem={(user) => <li key={user.id}>{user.name}</li>}
      />
    </>
  )
}
