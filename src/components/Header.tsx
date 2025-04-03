'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Component() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return 'Home'

  return (
    <div className='flex gap-2 mb-2'>
      <Link href='/'>Home</Link>
      <button onClick={() => router.back()} className='link'>
        Go Back
      </button>
    </div>
  )
}
