import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const PlusButton = styled(Button)`
  color: white;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#580C5E'};
  border: none;
  margin-left: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  height: 35px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : null)};
  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#580C5E'};
    border: none;
    box-shadow: 0px 2px 5px gray;
  }
`

export const IsRequiredWrapper = styled.div`
  margin-left: 2%;
`
