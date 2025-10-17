// * Extends in TypeScript has different uses, depending on the context
// 1. In interface inheritance, it allows one interface to inherit properties from another
interface Product {
  id: number
  name: string
  price: number
}

export interface CartProduct extends Product {
  quantity: number
}

// --------------------------------

// 2. In generic constraints, it ensures a type parameter adheres to a specific type or interface
const user = {
  name: 'John',
  age: 30,
}

function getUserData<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

export const userName = getUserData(user, 'name') // 'John'
export const userAge = getUserData(user, 'age') // 30

// --------------------------------

// 3. In conditional types, it checks if one type is assignable to another, enabling type transformations based on that check

type IsString<T> = T extends string ? true : false

export type Test1 = IsString<string> // true
export type Test2 = IsString<number> // false
export type Test3 = IsString<'hi'> // true

type IsNum<T> = T extends number ? 'Yes' : 'No'

export type Test4 = IsNum<string> // false
export type Test5 = IsNum<number> // true

type PrimaryColor = 'red' | 'blue' | 'yellow'
type IsPrimaryColor<T> = T extends PrimaryColor ? T : never
// ? never is used to filter out non-primary colors, it's the TypeScript way of saying "no type" and it is commonly used in conditional types to exclude certain types from a union.

export type Color1 = IsPrimaryColor<'red'> // 'red'
export type Color2 = IsPrimaryColor<'green'> // never

// --------------------------------

export default function Page() {
  return (
    <>
      <h1>Extends</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify(
          {
            CartProduct: {},
            userName,
            userAge,
          },
          null,
          2,
        )}
      </pre>
    </>
  )
}
