import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BranchActionProps } from './typings'
import { Icon } from '../../../components'

export const BranchAction = ({
  handleEdit,
  handleDelete,
  handleView
}: BranchActionProps): ReactElement => {
  return (
    <>
      <Icon variant="outline-light" onClick={handleView}>
        <FontAwesomeIcon icon={['far', 'eye']} style={{ marginRight: 10 }} />
      </Icon>
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

export default BranchAction
