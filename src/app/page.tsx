import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold'>React TypeScript</h1>

      <ul>
        <li>
          <Link href='/void'>Void</Link>
        </li>
        <li>
          <Link href='/function-types'>Function Types</Link>
        </li>
        <li>
          <Link href='/type-aliases'>Type Aliases</Link>
        </li>
        <li>
          <Link href='/interfaces'>Interfaces</Link>
        </li>
        <li>
          <Link href='/union-types'>Union Types</Link>
        </li>
        <li>
          <Link href='/merging-types'>Merging Types</Link>
        </li>
        <li>
          <Link href='/merging-interfaces'>Merging Interfaces</Link>
        </li>
        <li>
          <Link href='/props-with-children'>PropsWithChildren</Link>
        </li>
        <li>
          <Link href='/react-node'>ReactNode</Link>
        </li>
        <li>
          <Link href='/react-fc'>React.FC</Link>
        </li>
        <li>
          <Link href='/jsx-element'>JSX.Element</Link>
        </li>
        <li>
          <Link href='/use-state-objects-array'>useState Objects Array</Link>
        </li>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/generics'>Generics</Link>
        </li>
        <li>
          <Link href='/use-ref'>useRef</Link>
        </li>
        <li>
          <Link href='/reset-all-form-inputs'>Reset All Form Inputs</Link>
        </li>
        <li>
          <Link href='/component-props'>ComponentProps</Link>
        </li>
        <li>
          <Link href='/using-inferred-types'>Using Inferred Types</Link>
        </li>
        <li>
          <Link href='/hooks'>Hooks</Link>
        </li>
        <li>
          <Link href='/class-components'>Class Components</Link>
        </li>
        <li>
          <Link href='/context'>Context</Link>
        </li>
      </ul>
    </>
  )
}
