import styled from 'styled-components'
import { colors } from '../../const/theme'
import { Button } from 'react-bootstrap'
import { NavigationButtonProps } from './typings'
import { Body } from '../../typography'

export const TableFooterWrapper = styled.div`
  width: 50%;
  height: 45px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  float: right;
  justify-content: center;
`

export const NavigationButton = styled(Button)<NavigationButtonProps>`
  border: none;
  color: ${colors.gray};
  text-transform: capitalize;
  background: #c7c7c7;
  letter-spacing: 0.03em;
  height: 35px;
  font-size: 14px;
  text-align: center;
  &:hover,
  &:focus {
    border-color: ${colors.white};
    background: #c7c7c7;
    color: ${colors.black};
  }
  &:disabled {
    background: lightgray;
  }
  min-width: 100px;
  max-width: 150px;
  div {
    display: flex;
    justify-content: ${({ $isLeft }) => ($isLeft ? 'end' : 'start')};
  }
  svg {
    margin: auto 10px;
  }
`

export const PageDisplay = styled(Body)`
  width: 20%;
  margin-top: 7px;
  font-weight: 450;
  text-align: center;
  @media (max-width: 415px) {
    width: 40%;
  }
`
