// * Generic Classes allow you to create classes that can work with different data types while maintaining type safety.

class Items<T> {
  private items: T[] = []

  add(item: T) {
    this.items.push(item)
  }

  getAll(): T[] {
    return this.items
  }
}

const stringItems = new Items<string>()
stringItems.add('Item 1')
stringItems.add('Item 2')

const numberItems = new Items<number>()
numberItems.add(1)
numberItems.add(2)

export default function Page() {
  return (
    <>
      <h1>Generic Class</h1>

      <pre className='mt-4 rounded bg-zinc-900 p-4 text-zinc-100'>
        {JSON.stringify(
          {
            stringItems: stringItems.getAll(),
            numberItems: numberItems.getAll(),
          },
          null,
          2,
        )}
      </pre>
    </>
  )
}
