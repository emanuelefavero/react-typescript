'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Component() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return 'Home'

  return (
    <div className='mb-2 flex gap-2'>
      <Link href='/'>Home</Link>
      <button onClick={() => router.back()} className='link'>
        Go Back
      </button>
    </div>
  )
}
