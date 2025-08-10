import { cn } from '@/lib/utils'
import { INPUT_STYLES } from '@/styles'

type Props = React.ComponentPropsWithRef<'textarea'> & {}

export default function Component({ className, ...props }: Props) {
  return <textarea className={cn(INPUT_STYLES, className)} {...props} />
}
