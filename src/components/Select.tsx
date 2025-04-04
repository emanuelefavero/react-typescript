import type { SelectHTMLAttributes, Ref } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string
  ref?: Ref<HTMLSelectElement>
}

export default function Component({ className, ref, ...props }: SelectProps) {
  return (
    <select
      className={`border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  )
}
