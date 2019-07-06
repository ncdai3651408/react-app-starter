import React, { Component } from 'react'
// import LoginForm from 'components/auth/login-form'
// import Layout from 'components/layout'
import { Provider } from 'mobx-react'
import { HashRouter as Router, Route } from 'react-router-dom'

import stores from 'stores'

import Layout from 'components/layout'

import Home from 'pages/home'
import Login from 'pages/login'

class App extends Component {
  render () {
    return (
      <Provider {...stores}>
        <Router>
          <Layout>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route path='/auth'>
              <Route
                path='/auth/login'
                component={Login}
              />
            </Route>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

export default App
