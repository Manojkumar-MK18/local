import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const QuestionNumber = styled.div`
  display: flex;
  justify-content: row;
  span {
    font-size: 16px;
    font-weight: 700;
    padding-right: 10px;
  }
`

export const QuestionText = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #1f1f1f;
`

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 80%;
  margin-left: 35px;
  flex-direction: column;
`

interface OptionProps {
  isSelected?: boolean
  isInCorrect?: boolean
}

export const Option = styled.div<OptionProps>`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  > * {
    margin-right: 8px !important;
    > * {
      height: auto !important;
    }
  }
  padding: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.answer?.selected};
  }
  border-radius: 10px;
  margin-top: 12px;
  background: ${({ isSelected, theme, isInCorrect }) =>
    isSelected
      ? theme.answer?.selected
      : isInCorrect
      ? theme.answer?.inCorrect
      : 'none'};
`

export const QuestionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 10px 0 ${({ theme }) => theme.card.border};
  border-radius: 10px;
`

export const ArrowIcons = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: #655366;
`

export const ButtonIcon = styled(Button)`
  line-height: 0;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 15px;
  margin: 20px 20px 10px 10px;
  color: #655366;
  background-color: #fac2fd;
  border: 1px solid #655366;
  border-radius: 6px;
  font-weight: 700;
  box-shadow: 0 1px 2px 0 rgb(16 24 40 / 5%) !important;
  &:hover,
  &:focus,
  &:active {
    color: #655366;
    background-color: #fac2fd;
    border: 1px solid #655366;
  }
  &:disabled {
    border: 1px solid lightgray;
    background-color: lightgray;
  }
`
