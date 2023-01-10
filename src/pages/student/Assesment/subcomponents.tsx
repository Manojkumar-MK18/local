import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import fonts, { weight } from '../../../const/fonts'

export const MeterWrapper = styled.div`
  width: 38%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  background-color: #ffffff !important;
  border-radius: 15px;
  padding: 10px 10px;
  box-sizing: border-box;
  justify-content: center;
`

export const SpeedometerWarpper = styled.div`
  margin-top: 15px;
`

export const AnalyticsWrapper = styled.div`
  width: 60%;
  background-color: #ffffff !important;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TestAttemptWrapper = styled.div`
  width: 70%;
`

export const TestAttemptContentWrapper = styled.div`
  border-radius: 15px;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff !important;
`

export const UpcommingTestWrapper = styled.div`
  width: 28%;
  height: 100px;
`

export const UpcommingTestContentWrapper = styled.div`
  padding: 10px 20px;
  background-color: #ffffff !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 15px;
`

export const Title = styled.div`
  margin-top: -20px;
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 15px;
`

export const ChapterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 19px 19px;
  margin: 0 auto;
  width: 80%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #e7f5fc;
  }
`

export const ChapterNumber = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-right: 2%;
  margin-left: 11%;
  color: #55075b;
`

export const SubtitleWrapper = styled.div`
  width: 80%;
  margin-left: 12%;
`

export const CardTitle = styled(Card.Title)`
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  cursor: pointer;
`

export const CardSubtitle = styled(Card.Subtitle)`
  margin-left: 20px;
  color: #55075b;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
`
export const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`
export const TakeTestButton = styled(Button)`
  border-radius: 5px;
  text-align: center;
  padding: 0.525rem 1.5rem;
  border: none;
  letter-spacing: 1px;
  font-size: ${fonts.medium}px;
  font-weight: ${weight.medium};
  margin: auto 4px;
  &:focus,
  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`
