import { Card, Figure } from 'react-bootstrap'
import styled from 'styled-components'

export const BackButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 10px 25px 10px;
`

export const SubjectIcon = styled(Figure)`
  width: 56px;
`

export const SubjectWrapper = styled.div`
  margin-left: 2%;
  margin-top: 4px;
`

export const CardTitle = styled(Card.Title)`
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  cursor: pointer;
`
export const CardSubtitle = styled(Card.Subtitle)`
  color: #55075b;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
`
