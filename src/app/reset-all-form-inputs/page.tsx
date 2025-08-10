'use client'

import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'

// * This page demonstrates how to reset all form inputs

export default function Page() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Log the form data
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    console.log('Name:', name)
    console.log('Email:', email)

    event.currentTarget.reset() // Reset all form inputs
  }

  return (
    <>
      <h1>Reset All Form Inputs</h1>

      <h2>Reset All Form Inputs with Reset Button</h2>
      <form>
        <Input type='text' name='name' placeholder='Enter your name' />
        <Input type='email' name='email' placeholder='Enter your email' />
        <Button type='reset'>Reset All Inputs</Button>
      </form>

      <h2>Reset All Form Inputs with event.currentTarget</h2>
      <form>
        <Input type='text' name='name' placeholder='Enter your name' />
        <Input type='email' name='email' placeholder='Enter your email' />
        <Button
          type='button'
          onClick={(event) => {
            const form = event.currentTarget.form
            if (form) form.reset()
          }}
        >
          Reset All Inputs
        </Button>
      </form>

      <h2>Reset All Form Input after submit</h2>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='name' placeholder='Enter your name' required />
        <Input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
        />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )
}
