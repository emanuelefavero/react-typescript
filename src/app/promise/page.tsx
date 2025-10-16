type Post = {
  id: number
  title: string
  body: string
}

// * Promise will resolve to the type of value that the promise returns

// TIP: To assign types to async functions return values, you can use Promise<Type>

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

// TIP: You can also use Promise to read async props in Server Components

type Props = {
  searchParams: Promise<{ search: string }>
}

export default async function Page({ searchParams }: Props) {
  const posts = await getPosts()
  const { search } = await searchParams

  console.log('Search query:', search) // Try /promise?search=test in the URL

  return (
    <>
      <h1>Promise</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
