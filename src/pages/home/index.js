import React from 'react'
import { inject } from 'mobx-react'
import createIsAuthenticated from 'hoc/is-authenticated'

@createIsAuthenticated({})
@inject(stores => ({
  me: stores.authStore.me
}))
class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h4>Home Page</h4>
        <p>Hi, {this.props.me.username}</p>
      </div>
    )
  }
}

export default HomePage
