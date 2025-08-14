'use client'

import { ErrorBoundary } from 'react-error-boundary'
import BuggyComponent from './BuggyComponent'

export default function Component() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BuggyComponent />
    </ErrorBoundary>
  )
}
