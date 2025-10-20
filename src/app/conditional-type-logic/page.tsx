// * Conditional Type Logic - Conditional types allow you to create types that depend on a condition

// Basic Conditional Types
type IsString<T> = T extends string ? true : false
export type Test1 = IsString<string> // true

type Variant = 'primary' | 'secondary'
type IsValidVariant<T> = T extends Variant ? true : false
export type Test2 = IsValidVariant<'primary'> // true
export type Test3 = IsValidVariant<'danger'> // false

// Extract function return type
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never
export type Num = GetReturnType<() => number>
export type Str = GetReturnType<(a: string) => string>

// TIP: TypeScript also provider ReturnType to get the return type of a function

// Flatten array conditionally
type Flatten<T> = T extends (infer U)[] ? U : T
export type Arr1 = Flatten<number[]> // number

// Combining conditional types with generics
type Wrapper<T> = {
  value: T extends string ? string : number
}
export const wrappedString: Wrapper<string> = { value: 'hello' }
export const wrappedNumber: Wrapper<number> = { value: 42 }

export default function Page() {
  return (
    <>
      <h1>Conditional Type Logic</h1>
    </>
  )
}
