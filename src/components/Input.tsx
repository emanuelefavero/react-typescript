import type { InputHTMLAttributes, Ref } from 'react'
import { INPUT_STYLES } from '@/styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  ref?: Ref<HTMLInputElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <input
      className={`${INPUT_STYLES} ${className ?? ''}`}
      ref={ref}
      {...props}
    />
  )
}
