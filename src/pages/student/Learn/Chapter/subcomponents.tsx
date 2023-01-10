import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { Figure } from 'react-bootstrap'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9edf4;
  #wrapper {
    width: 100%;
  }
`

export const CardTitle = styled(Card.Title)`
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  cursor: pointer;
  margin-top: 0.2%;
`
export const CardSubtitle = styled(Card.Subtitle)`
  margin-left: 20px;
  color: #55075b;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
`

export const SubjectIcon = styled(Figure)`
  width: 56px;
`
export const SubjectWrapper = styled.div`
  margin-left: 2%;
  margin-top: 4px;
`

export const SubtitleWrapper = styled.div`
  width: 80%;
  margin-left: 12%;
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`
export const BackButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 1%;
  margin-top: 8px;
  margin-bottom: 2%;
`

export const ChapterNumber = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-right: 2%;
  margin-left: 11%;
  color: #55075b;
`

export const DropDownWrapper = styled.div`
  width: 16%;
  margin-top: 16px;
  margin-right: 50px;
`

export const TitleWrapper = styled.div`
  display: flex;
  width: 75%;
`
