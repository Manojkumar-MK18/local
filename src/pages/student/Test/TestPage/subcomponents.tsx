import { Button, Card, Figure } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../../../const/theme'

export const TestWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh !important;
  background: #f0f0f5 !important;
  position: fixed;
  width: 100%;
`
export const Wrapper = styled.div`
  background: #ffffff !important;
  margin: 10px 10px;
  box-shadow: 0 8px 30px 0 rgb(172 185 176 / 14%);
  padding: 10px 10px;
  border-radius: 10px;
  width: 70%;
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
  margin: 10px 10px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  height: 60vh;
  margin-bottom: 10px;
`

export const UserLogo = styled(Figure)`
  border: 1px solid ${({ theme }) => theme.border};
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  background: #ffffff;
  height: 100%;
  box-shadow: 0 8px 30px 0 rgb(172 185 176 / 14%);
  margin: auto;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const QuestionNumberWrapper = styled.div`
  width: 100%;
  box-shadow: 0 8px 30px 0 rgb(172 185 176 / 14%);
  height: 100vh;
  border-radius: 10px;
  background: #ffffff !important;
`

export const HeaderWrapper = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 0.5px solid lightgray;
  margin-bottom: 30px;
  padding-bottom: 10px;
`

export const TestQuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 500px;
  overflow: auto;
  padding: 20px;
  @media (max-width: 415px) {
    width: 100%;
    * > img {
      max-width: 280px;
    }
  }
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`

export const JumpHeader = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.card.color};
  padding: 0.5rem 1rem;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.card.border};
`

export interface StatusMarkerProps {
  bordercolor?: any
}

export const StatusMarker = styled.div<StatusMarkerProps>`
  height: 15px;
  width: 15px;
  border-radius: 1px;
  display: inline-block;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid ${({ bordercolor }) => (bordercolor ? bordercolor : null)};
  background: ${({ color }) => color};
`
export const Small = styled.small`
  font-size: 15px;
  padding: 2px 0;
  color: #363c4f;
  font-size: 14px;
  font-weight: 700;
  color: #363c4f;
`

export const JumpQuestionsList = styled(Card.Body)`
  padding: 16px;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid lightgray;
  width: 90%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    margin: 6px;
    box-shadow: 0 1px 10px 0 ${({ theme }) => theme.card.border};
    width: 55px;
  }
  .static {
    border: 1px solid #655366;
    background: none;
    color: #655366;
  }
`

export const JumpButton = styled(Button)`
  font-size: 15px;
  font-weight: 600;
  width: 35px;
  padding: 2px 10px;
`

export const TestFooterWrapper = styled.div`
  margin: 32px auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    margin: 12px;
  }
`

export const MarkedReviewButton = styled(Button)`
  background: ${colors.amber};
  color: ${colors.white};
  font-size: 15px;
  font-weight: 700;
  border: 1px solid ${colors.amber};
  border-radius: 8px;
  &:hover,
  &:active,
  &:focus {
    background: ${colors.amber};
    color: ${colors.white};
    border: 1px solid ${colors.amber};
    outline: none;
    box-shadow: none;
  }
`

export const SubmitButton = styled(Button)`
  background: #5d1761;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #7d0c83;
  border-radius: 8px;
  &:hover,
  &:active,
  &:focus {
    background: #49054d;
    border: 1px solid #7d0c83;
    color: #ffffff;
    outline: none;
    box-shadow: none;
  }
`

export const OverViewTextWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-weight: 600;
  }
`
