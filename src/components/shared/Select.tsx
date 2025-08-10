import { cn } from '@/lib/utils'
import { INPUT_STYLES } from '@/styles'

type Props = React.ComponentPropsWithRef<'select'> & {}

export default function Component({ className, ...props }: Props) {
  return <select className={cn(INPUT_STYLES, className)} {...props} />
}
