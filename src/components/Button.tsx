import type { ButtonHTMLAttributes, Ref } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  ref?: Ref<HTMLButtonElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <button
      className={`bg-blue-500 text-white rounded-md p-2 cursor-pointer transition-transform duration-200 hover:bg-blue-600 active:scale-95 ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  )
}
