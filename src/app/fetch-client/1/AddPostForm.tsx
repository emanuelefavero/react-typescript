'use client'

import { addPost } from '@/app/fetch-client/actions'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Textarea from '@/components/shared/Textarea'
import { useActionState } from 'react'

async function action(state: typeof initialState, formData: FormData) {
  const result = await addPost(formData)
  return {
    success: result?.success || false,
    error: result?.error || '',
  }
}

const initialState = {
  success: false,
  error: '',
}

export default function AddPostForm() {
  const [state, formAction, pending] = useActionState(action, initialState)

  return (
    <form action={formAction} className='mb-4 flex max-w-prose flex-col gap-4'>
      <Input type='text' name='title' placeholder='Title' required />
      <Textarea name='content' placeholder='Content' required />
      <Button type='submit' disabled={pending}>
        Add Post
      </Button>
      <div className='flex min-h-6 items-center'>
        {state.success && <div>Post added successfully!</div>}
        {state.error && <div>Error: {state.error}</div>}
      </div>
    </form>
  )
}
