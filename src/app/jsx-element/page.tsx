import Component from './Component'

// * JSX.Element is a type that represents the return value of a React component (which is a JSX element)

// TIP: Use JSX.Element when you want to make sure that the component returns a valid JSX element
// TIP: ReactElement is similar to JSX.Element but it is more specific and allows to define the type of the props

export default function Page() {
  return (
    <>
      <h1>JSX.Element</h1>
      <Component title='Hello'></Component>
    </>
  )
}
