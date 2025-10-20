// * Generic types allow you to create reusable components that can work with different data types

type User<T> = {
  name: string
  data: T
}

const user1: User<string> = {
  name: 'John',
  data: 'Some user data',
}

const user2: User<{ age: number }> = {
  name: 'Jane',
  data: { age: 25 },
}

// --------------------------------

// Generic Type with constraints - makes sure the type T has an id property of type number

type ItemWithId<T extends { id: number }> = {
  item: T
}

const item1: ItemWithId<{ id: number; name: string }> = {
  item: { id: 1, name: 'Item 1' },
}

export default function Page() {
  return (
    <>
      <h1>Generic Type</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify({ user1, user2, item1 }, null, 2)}
      </pre>
    </>
  )
}
