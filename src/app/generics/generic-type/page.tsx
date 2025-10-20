// * Generic types allow you to create reusable components that can work with different data types

type User<T> = {
  name: string
  data: T
}

export const user1: User<string> = {
  name: 'John',
  data: 'Some user data',
}

export const user2: User<{ age: number }> = {
  name: 'Jane',
  data: { age: 25 },
}

// --------------------------------

// Generic Type with constraints - makes sure the type T has an id property of type number

type ItemWithId<T extends { id: number }> = {
  item: T
}

export const item1: ItemWithId<{ id: number; name: string }> = {
  item: { id: 1, name: 'Item 1' },
}

export default function Page() {
  return (
    <>
      <h1>Generic Type</h1>
    </>
  )
}
