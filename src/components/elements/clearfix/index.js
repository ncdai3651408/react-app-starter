import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.height}px;
`

const Clearfix = ({ height = 16 }) => {
  return (
    <Container height={height} />
  )
}

export default Clearfix
