import Button from './Button'

export default function Page() {
  return (
    <>
      <h1>as const</h1>

      <Button size='sm'>Small Button</Button>
      <Button size='lg' className='m-4'>
        Large Button
      </Button>
    </>
  )
}
