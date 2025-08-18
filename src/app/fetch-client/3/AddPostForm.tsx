'use client'

import { addPost } from '@/app/fetch-client/actions'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Textarea from '@/components/shared/Textarea'
import { useState, useTransition } from 'react'

export default function Component() {
  const [message, setMessage] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await addPost(formData) // Call server action and get result

      if (result?.success) {
        setMessage('Post added successfully!')

        // TIP: Here you could also use a router to redirect or update the `posts` state with the new post of `posts` are managed on the client (use Zustand for the `posts` state so you can access it from anywhere)
      } else {
        setMessage(`Error: ${result?.error || 'Unknown error'}`)
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-4 flex max-w-prose flex-col gap-4'
    >
      <Input type='text' name='title' placeholder='Title' required />
      <Textarea name='content' placeholder='Content' required />
      <Button type='submit' disabled={isPending}>
        Add Post
      </Button>
      <div className='flex min-h-6 items-center'>
        {message && <p>{message}</p>}
      </div>
    </form>
  )
}
