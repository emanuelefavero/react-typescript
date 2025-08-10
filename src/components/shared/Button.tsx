import clsx from 'clsx'

type Props = React.ComponentPropsWithRef<'button'> & {}

export default function Component({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'bg-blue-500 text-white rounded-md p-2 cursor-pointer transition-transform duration-200 hover:bg-blue-600 active:scale-95',
        className
      )}
      {...props}
    />
  )
}
