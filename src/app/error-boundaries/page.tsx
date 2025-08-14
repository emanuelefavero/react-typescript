import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className='mb-4'>Error Boundaries</h1>

      <ul>
        <li>
          <Link href='/error-boundaries/react-error-boundary'>
            React Error Boundary
          </Link>
        </li>
        <li>
          <Link href='/error-boundaries/nextjs-error-boundary'>
            Next.js Error Boundary
          </Link>
        </li>
      </ul>
    </>
  )
}
