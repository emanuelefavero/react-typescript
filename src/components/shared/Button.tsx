import clsx from 'clsx'

type Props = React.ComponentPropsWithRef<'button'> & {}

export default function Component({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-transform duration-200 hover:bg-blue-600 active:scale-95',
        className,
      )}
      {...props}
    />
  )
}
