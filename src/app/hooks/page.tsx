import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link href='/hooks/use-state'>useState</Link>
        </li>
        <li>
          <Link href='/hooks/use-reducer'>useReducer</Link>
        </li>
        <li>
          <Link href='/hooks/use-ref'>useRef</Link>
        </li>
      </ul>
    </>
  )
}
