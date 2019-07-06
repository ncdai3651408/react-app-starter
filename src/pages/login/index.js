import React from 'react'
import LoginForm from 'components/auth/login-form'
import Clearfix from 'components/elements/clearfix'

import { Row, Col } from 'reactstrap'
import createIsAuthenticated from 'hoc/is-authenticated'

@createIsAuthenticated({
  authRequired: false
})
class LoginPage extends React.Component {
  render () {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h4>Login</h4>
          <Clearfix />
          <LoginForm />
        </Col>
      </Row>
    )
  }
}

export default LoginPage
