import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { H4 } from '../../typography'

export const CardWrapper = styled(Card)`
  margin: 1rem;
  border: none;
`

const CardHeader = styled(H4)`
  background-color: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.card.color};
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.card.border};
`

export default CardHeader
