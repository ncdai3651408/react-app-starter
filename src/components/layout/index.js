import React from 'react'
import Header from 'components/layout/header'
import { Container } from 'reactstrap'
import Clearfix from 'components/elements/clearfix'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Clearfix />
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default Layout
