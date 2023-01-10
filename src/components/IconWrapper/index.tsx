import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../const/theme'

const Icon = styled(Button)`
  border-color: ${colors.white};
  background: ${colors.white};
  color: ${colors.gray};
  text-transform: capitalize;
  &:hover,
  &:focus {
    border-color: ${colors.white};
    background: ${colors.white};
    color: ${colors.black};
    box-shadow: none;
    outline: none;
  }
  &:active {
    box-shadow: none;
    outline: none;
  }
  max-width: 40px;
`
export default Icon
