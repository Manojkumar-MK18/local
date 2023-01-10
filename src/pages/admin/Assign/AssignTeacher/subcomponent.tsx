import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Icon } from '../../../../components'
import { AssignTeacherActionProps } from './types'

export const AssignTeacherAction = ({
  handleEdit,
  handleDelete
}: AssignTeacherActionProps): ReactElement => {
  return (
    <>
      <Icon variant="outline-light" onClick={handleDelete}>
        <FontAwesomeIcon
          icon={['far', 'trash-alt']}
          style={{ marginRight: 10 }}
        />
      </Icon>
      <Icon variant="outline-light" onClick={handleEdit}>
        <FontAwesomeIcon icon={['far', 'edit']} style={{ marginRight: 10 }} />
      </Icon>
    </>
  )
}

export default AssignTeacherAction
