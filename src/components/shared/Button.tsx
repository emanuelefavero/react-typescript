import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'button'> & {}

export default function Component({ className, ...props }: Props) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-transform duration-200 select-none hover:bg-blue-600 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
