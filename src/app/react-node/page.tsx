import Component from './Component'

// * ReactNode is a type that allows to define a component that accepts children
// TIP: Use ReactNode when you want to make the children prop optional or you want more control over the type of children. Also if there are no other props besides children
// TIP: Another way to define a component that accepts children is to use `PropsWithChildren` @see @/app/props-with-children/page.tsx
// NOTE: ReactNode is generally more used than PropsWithChildren due to flexibility

export default function Page() {
  return (
    <>
      <h1>ReactNode</h1>

      <Component title='Hello'>
        <p>World</p>
      </Component>
    </>
  )
}
