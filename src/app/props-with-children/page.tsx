import Component from './Component'

// * PropsWithChildren is a type that allows to define a component that accepts children

// TIP: Use PropsWithChildren when you want to automatically include `children` without manually adding it to the props type
// TIP: Another way to define a component that accepts children is to use `ReactNode` in the props type @see @/app/react-node/page.tsx

export default function Page() {
  return (
    <div>
      <h1>PropsWithChildren</h1>
      <Component title='Hello'>
        <p>World</p>
      </Component>
    </div>
  )
}
