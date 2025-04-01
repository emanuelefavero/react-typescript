import { type JSX } from 'react'

type Props = {
  title: string
}

export default function Component({ title }: Props): JSX.Element {
  return <h2>{title}</h2>
}

/*
// TIP: ReactElement is similar to JSX.Element but it is more specific, example:
export default function Component({ title }: Props): ReactElement {
  return <h2>{title}</h2>
}
*/
