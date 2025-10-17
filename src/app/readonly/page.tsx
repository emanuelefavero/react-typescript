// * Readonly<Type> constructs a type with all properties of Type set to readonly
//  This means the properties of the constructed type cannot be reassigned

type Config = Readonly<{
  appName: string
  version: string
}>

const CONFIG: Config = {
  appName: 'Readonly Example',
  version: '1.0.0',
}

// CONFIG.appName = 'New Name' // Error: Cannot assign to 'appName' because it is a read-only property

// --------------------------------

// TIP: We can also add `readonly` modifier to individual properties in an interface or type
type Config2 = {
  readonly appName: string
  version: string
}

const CONFIG2: Config2 = {
  appName: 'Readonly Example 2',
  version: '2.0.0',
}

CONFIG2.version = '2.1.0' // Allowed

// --------------------------------

// TIP: To create a readonly object, we can also use `as const` assertion

const CONFIG3 = {
  appName: 'Readonly Example 3',
  version: '3.0.0',
} as const

// CONFIG3.version = '3.1.0' // Error: Cannot assign to 'version' because it is a read-only property

export default function Page() {
  return (
    <>
      <h1>Readonly</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify({ CONFIG, CONFIG2, CONFIG3 }, null, 2)}
      </pre>
    </>
  )
}
