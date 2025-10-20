// * Generic Functions allow you to create reusable functions that can work with different data types while maintaining type safety.

function createPair<T, U>(a: T, b: U): { a: T; b: U } {
  return {
    a,
    b,
  }
}

const pair1 = createPair(1, 'one') // { a: 1, b: 'one' }
const pair2 = createPair<boolean, { name: string }>(true, {
  name: 'Test',
}) // { a: true, b: { name: 'Test' } }

export default function Page() {
  return (
    <>
      <h1>Generic Function</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify({ pair1, pair2 }, null, 2)}
      </pre>
    </>
  )
}
