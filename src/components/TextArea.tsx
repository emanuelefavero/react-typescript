import type { TextareaHTMLAttributes, Ref } from 'react'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  ref?: Ref<HTMLTextAreaElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <textarea
      className={`border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  )
}
