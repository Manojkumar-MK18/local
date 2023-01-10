import { ReactElement } from 'react'
import { BatchActionProps } from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '../../../components'

export const BatchAction = ({
  handleEdit,
  handleDelete
}: BatchActionProps): ReactElement => {
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

export default BatchAction
