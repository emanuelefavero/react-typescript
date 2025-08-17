import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Fetch in Client Components</h1>
      <Link href='/fetch-client/example-1'>Example 1</Link>
      <Link href='/fetch-client/example-2'>Example 2</Link>
    </>
  )
}
