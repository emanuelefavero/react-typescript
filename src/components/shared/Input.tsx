import { INPUT_STYLES } from '@/styles'
import clsx from 'clsx'

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Component({ className, ...props }: Props) {
  return <input className={clsx(INPUT_STYLES, className)} {...props} />
}
