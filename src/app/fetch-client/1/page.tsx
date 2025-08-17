import { baseUrl } from '@/config/baseUrl'
import { Suspense } from 'react'
import AddPostForm from './AddPostForm'
import Posts from './Posts'

async function getPosts() {
  const res = await fetch(`${baseUrl}/api/posts`)
  return await res.json()
}

// * The best way to fetch data in Client Components is to do it in a Server Component and pass the data as props. The only thing to keep in mind is that the Server Component must be async to await the fetch call

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <h1 className='mb-4'>Fetch in Client Components 1</h1>
      <AddPostForm />
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
      </Suspense>
    </>
  )
}
