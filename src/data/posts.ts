export type Post = {
  id: string
  title: string
  content: string
}

export const posts: Post[] = [
  {
    id: crypto.randomUUID(),
    title: 'First Post',
    content: 'This is the content of the first post.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Second Post',
    content: 'This is the content of the second post.',
  },
]
