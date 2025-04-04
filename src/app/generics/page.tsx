import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Generics</h1>

      <ul>
        <li>
          <Link href='/generics/generic-component'>Generic Component</Link>
        </li>
        <li>
          <Link href='/generics/generic-hook'>Generic Hook</Link>
        </li>
        <li>
          <Link href='/generics/generic-event-handler'>
            Generic Event Handler
          </Link>
        </li>
      </ul>
    </>
  )
}
