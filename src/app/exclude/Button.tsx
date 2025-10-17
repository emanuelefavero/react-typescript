// * Exclude can be used to exclude specific types from a union type

type Variant = 'primary' | 'secondary' | 'danger'

type NonDangerVariant = Exclude<Variant, 'danger'>
// 'primary' | 'secondary'

const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
} as const

type Props = {
  variant: NonDangerVariant
}

// --------------------------------

// TIP: We can also create our own Exclude type using conditional types
// type MyExclude<T, U> = T extends U ? never : T

// type ErrorVariant = MyExclude<Variant, 'primary' | 'secondary'>
// 'danger'

export default function Button({ variant }: Props) {
  return <button className={variants[variant]}>{variant.toUpperCase()}</button>
}
