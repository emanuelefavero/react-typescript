'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/events' && <Link href='/events'>Go Back</Link>}
      {children}
    </>
  )
}
