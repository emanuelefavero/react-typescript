// * Union Types can be used to define a type that can be one of several types
type Status = 'active' | 'inactive' | null

export default function Page() {
  const status: Status = 'active'

  return (
    <>
      <h1>Union Types</h1>

      <p>{status}</p>
    </>
  )
}
