import { colors } from '../../const/theme'
import Button from 'react-bootstrap/esm/Button'
import styled from 'styled-components'
import fonts, { weight } from '../../const/fonts'

const StyledButton = styled(Button)`
  background-image: linear-gradient(195deg, #811d88, #533355);
  color: ${colors.white};
  border: none;
  font-size: ${fonts.small}px;
  font-weight: ${weight.bold};
  letter-spacing: 0.02857em;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.525rem 1.5rem;
  &:focus,
  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  margin: auto 4px;
`

export default StyledButton
