export default function Component() {
  throw new Error('Intentional render error')
  return <div>This should never render</div>
}
