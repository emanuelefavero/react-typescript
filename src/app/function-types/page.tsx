type MyObject = {
  // * When an object has a function property, use a function type to define the function signature (parameters and return type)
  add: (a: number, b: number) => number
}

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
