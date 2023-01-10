import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import fonts from '../../../const/fonts'

export const TestButtons = styled(Button)`
  border: none;
  letter-spacing: 0.02857em;
  border-radius: 1rem;
  text-align: center;
  padding: 0.525rem 1.5rem;
  font-size: ${fonts.medium}px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: translateY(-2px);
    transition: all 0.2s;
  }
  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`
