import { Collapse, FormCheck } from 'react-bootstrap'
import styled from 'styled-components'

interface Props {
  marginleft?: string
  marginright?: string
}

export const StyledText = styled.p`
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: 600;
`
export const StyledCollapse = styled(Collapse)<Props>`
  margin-left: ${({ marginleft }) => (marginleft ? marginleft : ' 18%')};
`

export const StyledFormCheck = styled(FormCheck)<Props>`
  margin-right: ${({ marginright }) => (marginright ? marginright : '2%')};
`
