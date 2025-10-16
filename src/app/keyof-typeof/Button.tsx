import { cn } from '@/lib/utils'

const variants = {
  primary: /*tw*/ 'bg-sky-500',
  secondary: /*tw*/ 'bg-neutral-500',
} as const
type Variant = keyof typeof variants // * 'primary' | 'secondary'

type Props = React.ComponentPropsWithRef<'button'> & {
  variant?: Variant
}

export default function Component({
  children,
  className,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'rounded-md px-3.5 py-2.5 font-semibold text-white',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
