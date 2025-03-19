import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='font-bold text-3xl'>React TypeScript</h1>

      <Link href='/void'>Void</Link>
    </>
  )
}
