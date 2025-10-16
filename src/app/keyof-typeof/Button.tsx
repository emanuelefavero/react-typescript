import { cn } from '@/lib/utils'

const variants = {
  primary: /*tw*/ 'bg-sky-500 hover:bg-sky-600',
  secondary: /*tw*/ 'bg-neutral-500 hover:bg-neutral-600',
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
        'cursor-pointer rounded-md px-3 py-1 text-white transition duration-200 active:scale-95',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
