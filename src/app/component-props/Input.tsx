import clsx from 'clsx'

// TIP: Use ComponentPropsWithRef to create a component that accepts all props of a native HTML element, including refs
// TIP: There is also `ComponentProps` that does not specify if ref should be there or not and `ComponentPropsWithoutRef` to exclude it
// TIP: ComponentPropsWithRef is the most commonly used type for creating components that extend native elements like this one
// TIP: You can also add more html elements inside the component, just make sure to place `{...props}` in the correct place

interface Props extends React.ComponentPropsWithRef<'input'> {
  className?: string
}

export default function Input({ className, ...props }: Props) {
  return (
    <>
      <input
        type='text'
        className={clsx(
          'rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:bg-blue-500/10 focus:outline-none',
          className,
        )}
        {...props} // Make sure to place {...props} here
      />
    </>
  )
}
