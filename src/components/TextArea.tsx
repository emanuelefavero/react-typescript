import type { TextareaHTMLAttributes, Ref } from 'react'
import { INPUT_STYLES } from '@/styles'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  ref?: Ref<HTMLTextAreaElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <textarea
      className={`${INPUT_STYLES} ${className ?? ''}`}
      ref={ref}
      {...props}
    />
  )
}
