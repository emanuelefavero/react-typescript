// * Generic Component

import { ReactNode } from 'react'

type Props<T> = {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export default function Component<T>({ items, renderItem }: Props<T>) {
  return <ul>{items.map(renderItem)}</ul>
}
