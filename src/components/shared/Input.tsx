import { cn } from '@/lib/utils'
import { INPUT_STYLES } from '@/styles'

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Component({ className, ...props }: Props) {
  return <input className={cn(INPUT_STYLES, className)} {...props} />
}
