import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

const createIsAuthenticated = ({ authRequired = true }) => Component => {
  @inject(stores => ({
    isAuthenticated: stores.authStore.isAuthenticated,
    isFetchingMe: stores.authStore.isFetchingMe,
    fetchMe: () => stores.authStore.fetchMe()
  }))
  @observer
  class Authenticated extends React.Component {
    componentDidMount () {
      this.props.fetchMe()
    }

    render () {
      if (this.props.isFetchingMe) {
        return <div>Loading ...</div>
      }
      if (authRequired && !this.props.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: '/auth/login'
            }}
          />
        )
      }
      if (!authRequired && this.props.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: ''
            }}
          />
        )
      }
      return (
        <Component {...this.props} />
      )
    }
  }

  return Authenticated
}

export default createIsAuthenticated
