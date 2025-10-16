import { cn } from '@/lib/utils'

const variants = {
  primary: /*tw*/ 'bg-sky-500 hover:bg-sky-600',
  secondary: /*tw*/ 'bg-neutral-500 hover:bg-neutral-600',
} as const // * makes object readonly and its properties literal types
type Variant = keyof typeof variants

const sizes = {
  sm: /*tw*/ 'text-sm',
  md: /*tw*/ 'text-base',
  lg: /*tw*/ 'text-lg',
} as const
type Size = keyof typeof sizes

type Props = React.ComponentPropsWithRef<'button'> & {
  variant?: Variant
  size?: Size
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-md px-3 py-1 text-white transition duration-200 active:scale-95',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
