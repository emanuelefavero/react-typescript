import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Events</h1>

      <ul>
        <li>
          <Link href='/events/form-event'>FormEvent</Link>
        </li>
        <li>
          <Link href='/events/change-event'>ChangeEvent</Link>
        </li>
        <li>
          <Link href='/events/mouse-event'>MouseEvent</Link>
        </li>
        <li>
          <Link href='/events/keyboard-event'>KeyboardEvent</Link>
        </li>
        <li>
          <Link href='/events/focus-event'>FocusEvent</Link>
        </li>
        <li>
          <Link href='/events/drag-event'>DragEvent</Link>
        </li>
        <li>
          <Link href='/events/clipboard-event'>ClipboardEvent</Link>
        </li>
        <li>
          <Link href='/events/composition-event'>CompositionEvent</Link>
        </li>
      </ul>
    </>
  )
}
