import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='font-bold text-3xl'>React TypeScript</h1>

      <ul>
        <li>
          <Link href='/void'>Void</Link>
        </li>
        <li>
          <Link href='/function-types'>Function Types</Link>
        </li>
        <li>
          <Link href='/type-aliases'>Type Aliases</Link>
        </li>
        <li>
          <Link href='/interfaces'>Interfaces</Link>
        </li>
        <li>
          <Link href='/union-types'>Union Types</Link>
        </li>
        <li>
          <Link href='/merging-types'>Merging Types</Link>
        </li>
      </ul>
    </>
  )
}
