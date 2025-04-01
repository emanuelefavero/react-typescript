import React from 'react'

type Props = {
  title: string
}

const Component: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

export default Component
