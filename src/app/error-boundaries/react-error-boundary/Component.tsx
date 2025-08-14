'use client'

import { ErrorBoundary } from 'react-error-boundary'
import BuggyComponent from './BuggyComponent'

// * This component demonstrates how to use the `react-error-boundary` library to handle errors gracefully in React applications
// TIP: When using the `react-error-boundary` library, all types will be inferred automatically

export default function Component() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BuggyComponent />
    </ErrorBoundary>
  )
}
