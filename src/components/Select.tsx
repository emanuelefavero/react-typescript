import type { SelectHTMLAttributes, Ref } from 'react'
import { INPUT_STYLES } from '@/styles'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string
  ref?: Ref<HTMLSelectElement>
}

export default function Component({ className, ref, ...props }: Props) {
  return (
    <select
      className={`${INPUT_STYLES} ${className ?? ''}`}
      ref={ref}
      {...props}
    />
  )
}
