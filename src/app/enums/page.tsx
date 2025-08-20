import Enums from './Enums'
import Union from './Union'

export default function Page() {
  return (
    <>
      <h1>Enums</h1>

      {/* Enums can be used to define state of related values */}
      <Enums />

      {/* NOTE: The use of Enums is discouraged in React, use union types instead */}
      <Union />
    </>
  )
}
