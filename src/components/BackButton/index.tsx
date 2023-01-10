import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

const LightButton = styled(Button)`
  background: #f0f2f5;
  height: 45px;
  margin: auto 0;
  border: none;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.back?.hover};
  }
`

const BackButton = () => {
  const history = useHistory()
  return (
    <LightButton LightButton variant="light" onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} size="1x" />
    </LightButton>
  )
}

export default BackButton
