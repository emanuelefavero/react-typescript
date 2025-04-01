import { type ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

export default function Component({ title, children }: Props) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}
