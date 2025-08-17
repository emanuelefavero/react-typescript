import Component from './Component'

// * Classic way of fetching data in Client Components is to use the useEffect hook. This is useful when you want to fetch data after the component has mounted or when you can't fetch data in server components. (@see ./Component)

export default function Page() {
  return (
    <>
      <h1>Fetch in Client Components - Example 3</h1>
      <Component />
    </>
  )
}
