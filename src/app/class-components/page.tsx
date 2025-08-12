import Component from './Component'

// * @see ./Component for Class Components implementation

export default function Page() {
  return (
    <>
      <h1>Class Components</h1>
      <Component className='w-fit bg-sky-900 px-2 py-0.5 text-white' />
    </>
  )
}
