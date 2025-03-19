'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Component() {
  const pathname = usePathname()
  return <>{pathname === '/' ? 'Home' : <Link href='/'>Home</Link>}</>
}
