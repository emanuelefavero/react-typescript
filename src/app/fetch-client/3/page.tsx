import AddPostForm from './AddPostForm'
import Posts from './Posts'

// * Classic way of fetching data in Client Components is to use the useEffect hook. This is useful when you want to fetch data after the component has mounted or when you can't fetch data in server components. (@see ./Posts)

export default function Page() {
  return (
    <>
      <h1 className='mb-4'>Fetch in Client Components 3</h1>
      <AddPostForm />
      <Posts />
    </>
  )
}
