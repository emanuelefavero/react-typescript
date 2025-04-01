import { type PropsWithChildren } from 'react'

type Props = {
  title: string
}

export default function Component({
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}
