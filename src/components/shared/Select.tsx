import clsx from 'clsx'
import { INPUT_STYLES } from '@/styles'

type Props = React.ComponentPropsWithRef<'select'> & {}

export default function Component({ className, ...props }: Props) {
  return <select className={clsx(INPUT_STYLES, className)} {...props} />
}
