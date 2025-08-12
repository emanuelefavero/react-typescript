'use client'

import React from 'react'

type User = { id: number; name: string }
type Props = React.ComponentPropsWithRef<'div'> & {}
type State = { user: User }

export default class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      user: {
        id: 1,
        name: 'John',
      },
    }
  }

  componentDidMount() {
    console.log('Mounted')
  }

  render() {
    const { name } = this.state.user

    return <div {...this.props}>Name: {name}</div>
  }
}
