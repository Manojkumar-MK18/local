import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { Icon } from '../../../../components'
import { ActionProps } from './types'

export const ViewAction = ({ handleView }: ActionProps): ReactElement => {
  return (
    <>
      <Icon variant="outline-light" onClick={handleView}>
        <FontAwesomeIcon icon={['far', 'eye']} style={{ marginRight: 10 }} />
      </Icon>
    </>
  )
}

export default ViewAction

export const AttachmentUploader = styled(FormControl)`
  width: 100%;
  color: rgb(105, 109, 112);
  font-size: 16px;
  font-weight: 400;
`
