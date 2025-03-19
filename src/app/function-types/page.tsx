type MyObject = {
  // * When an object has a function property, use a function type to define the function signature (parameters and return type)
  add: (a: number, b: number) => number
}

// TIP: There is also the `Function` type which is a generic type for any function but it is not recommended to use it because it does not provide any information about the function signature and it will raise eslint errors

export default function Page() {
  const object: MyObject = {
    add: (a, b) => a + b,
  }

  return (
    <>
      <h1>Function Types</h1>

      <p>{object.add(1, 2)}</p>
    </>
  )
}
