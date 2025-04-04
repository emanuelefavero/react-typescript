import type { InputHTMLAttributes, Ref } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  ref?: Ref<HTMLInputElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <input
      className={`border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  )
}
