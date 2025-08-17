import { baseUrl } from '@/config/baseUrl'
import { Suspense } from 'react'
import Component from './Component'

async function getPosts() {
  const res = await fetch(`${baseUrl}/api/posts`)
  return await res.json()
}

// * You can use React's use hook to stream data from the server to client without creating an async server component. Start by fetching data in your Server component...(@see ./Component)

export default function Page() {
  const posts = getPosts()

  return (
    <>
      <h1>Fetch in Client Components - Example 2</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Component posts={posts} />
      </Suspense>
    </>
  )
}
