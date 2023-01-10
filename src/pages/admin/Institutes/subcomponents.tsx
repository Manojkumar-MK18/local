import { ReactElement } from 'react'
import { InstitueActionProps } from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon, Modal } from '../../../components'
import styled from 'styled-components'
import { colors } from '../../../const/theme'
import { Span } from '../../../typography'

export const InstituteAction = ({
  handleEdit,
  handleDelete,
  handleView
}: InstitueActionProps): ReactElement => {
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

export const CourseSelectionWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  height: 88px;
  margin-bottom: 0;

  @media (max-width: 415px) {
    width: 100%;
    margin: 8px 0 12px 0;
  }
`

export const CourseSelect = styled.div`
  height: 40px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  line-height: 40px;
  padding: 0 12px;
  &:hover,
  &:focus {
    border-color: ${({ theme: { input } }) => input.focus};
    cursor: pointer;
  }
`
export const BootstrapModal = styled(Modal)`
  display: flex !important;

  .modal-content {
    height: 100%;
  }
`

export const CourseCheckBoxWrapper = styled.div`
  padding: 0 12px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  display: flex;

  #course-name {
    min-width: 70px;
  }
`

export const SelectCheckBox = styled.div`
  height: 40px;
  display: flex;
  margin: auto 0;
`

export const CheckBoxContainer = styled.div`
  overflow: scroll;
`
export const CourseName = styled(Span)`
  width: 100%;
`
export const DetailsTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #52556e;
  margin-bottom: 0px;
`
export const DetailsData = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #52556e;
  margin: 2px;
`
export const DetailsWrapper = styled.div`
  width: 16%;
`
