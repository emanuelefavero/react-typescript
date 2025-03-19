export default function Page() {
  // * When a function does not return a value, use `void` as the return type instead of `undefined`
  function log(): void {
    console.log('Hello')
  }
  log()

  // * TypeScript will also infer `void` as the return type so it is not necessary to explicitly define it
  function log2() {
    console.log('Hello')
  }
  log2()

  return (
    <>
      <h1>Void</h1>
    </>
  )
}
