import Component from './Component'

// * React.FC is a type that allows to define a functional component
// NOTE: React.FC can only be used with regular functions. Today, it is not recommended to use React.FC but you can still encounter it in some codebases

export default function Page() {
  return (
    <>
      <h1>React.FC</h1>
      <Component title='Hello'></Component>
    </>
  )
}
