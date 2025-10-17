// * Extract can be used to select specific types from a union type. It is the opposite of Exclude (@see /exclude)

type Variant = 'primary' | 'secondary' | 'danger'

type NonDangerVariant = Extract<Variant, 'primary' | 'secondary'>
// 'primary' | 'secondary'

const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
} as const

type Props = {
  variant: NonDangerVariant
}

export default function Button({ variant }: Props) {
  return <button className={variants[variant]}>{variant.toUpperCase()}</button>
}

// --------------------------------

// TIP: We can also create our own Extract type using conditional types
type MyExtract<T, U> = T extends U ? T : never

export type ErrorVariant = MyExtract<Variant, 'danger'>
