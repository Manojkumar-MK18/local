import { Form } from 'react-bootstrap'
import styled from 'styled-components'

interface FormProsp {
  marginRight?: string
}

export const FormCheck = styled(Form.Check)<FormProsp>`
  background: none;
  margin-left: 20px;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : null)};
`
export const FormSwitch = styled(Form.Switch)``
