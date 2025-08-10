import { INPUT_STYLES } from '@/styles'
import clsx from 'clsx'

type Props = React.ComponentPropsWithRef<'textarea'> & {}

export default function Component({ className, ...props }: Props) {
  return <textarea className={clsx(INPUT_STYLES, className)} {...props} />
}
