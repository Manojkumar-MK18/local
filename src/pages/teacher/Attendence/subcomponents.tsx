import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Icon } from '../../../components'

export interface StudentAttendenceProps {
  handleEdit: () => void
  handleDelete: () => void
}

export const StudentAttendenceAction = ({
  handleEdit,
  handleDelete
}: StudentAttendenceProps): ReactElement => {
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

export default StudentAttendenceAction
