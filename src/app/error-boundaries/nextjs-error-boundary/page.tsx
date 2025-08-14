import BuggyComponent from '@/app/error-boundaries/BuggyComponent'

export default function Page() {
  return (
    <>
      <h1 className='mb-4'>Next.js Error Boundary</h1>
      <BuggyComponent />
    </>
  )
}
