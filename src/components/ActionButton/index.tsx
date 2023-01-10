import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { weight } from '../../const/fonts'

const ActionButton = styled(Button)`
  margin: 0 12px;
  letter-spacing: 0.02857em;
  font-size: 13px;
  text-align: center;
  font-weight: ${weight.bold};
  height: ${({ height }) => (height ? height : 'auto')};
`
export default ActionButton
