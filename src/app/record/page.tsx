// * Record<K, T> is a utility type that constructs an object type whose property keys are K and property values are T
//  It is useful for creating types that represent objects with a fixed set of keys and values of a specific type.
// TIP: We can also use `as const` instead of `Record` when we want to create objects with specific literal types as values

type Theme = 'light' | 'dark'

const themeClasses: Record<Theme, string> = {
  light: /*tw*/ 'bg-white text-black',
  dark: /*tw*/ 'bg-black text-white',
}

export default function Page() {
  return (
    <>
      <h1>Record</h1>

      <div className={`border border-zinc-500 p-2 ${themeClasses.light}`}>
        Light
      </div>
      <div className={`border border-zinc-500 p-2 ${themeClasses.dark}`}>
        Dark
      </div>
    </>
  )
}
