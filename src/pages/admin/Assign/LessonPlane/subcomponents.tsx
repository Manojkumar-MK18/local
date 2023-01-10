import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Icon } from '../../../../components'

export interface AssignLessonActionProps {
  handleEdit: () => void
}

export const AssignLessonAction = ({
  handleEdit
}: AssignLessonActionProps): ReactElement => {
  return (
    <>
      <Icon variant="outline-light" onClick={handleEdit}>
        <FontAwesomeIcon icon={['far', 'edit']} style={{ marginRight: 10 }} />
      </Icon>
    </>
  )
}

export default AssignLessonAction
