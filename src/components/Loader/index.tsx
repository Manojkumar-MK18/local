import React, { ReactElement } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

const LoadingIndicator = styled(Spinner)`
  margin: 12px auto;
  display: block;
  width: 50px;
  height: 50px;
`

const Loader = (): ReactElement => {
  return (
    <LoadingIndicator animation="border" role="status" variant="secondary">
      <span className="visually-hidden">Loading...</span>
    </LoadingIndicator>
  )
}

export default Loader
