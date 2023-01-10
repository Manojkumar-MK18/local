import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Icon } from '../../../../components'

export interface TeacherAttendenceProps {
  handleEdit: () => void
  handleDelete: () => void
}

export const TeacherAttendenceAction = ({
  handleEdit,
  handleDelete
}: TeacherAttendenceProps): ReactElement => {
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

export default TeacherAttendenceAction
