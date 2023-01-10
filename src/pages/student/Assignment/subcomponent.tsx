import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { Icon } from '../../../components'
import { colors } from '../../../const/theme'
import { NewAssignemntProsp } from './typing'

export const TabWrapper = styled.div`
  .nav-tabs {
    border-bottom: 1px solid ${({ theme }) => theme.tab.border};
    padding-left: 10px;
  }
  .nav-item {
    button {
      color: ${colors.gray};
    }
  }
  .nav-link.active {
    color: ${colors.purple};
    font-weight: 600;
    border-left: 1px solid ${({ theme }) => theme.tab.border};
    border-top: 1px solid ${({ theme }) => theme.tab.border};
    border-right: 1px solid ${({ theme }) => theme.tab.border};
    background: #dbdbdb;
  }
`

export const AttachmentUploader = styled(FormControl)`
  width: 100%;
  color: rgb(105, 109, 112);
  font-size: 16px;
  font-weight: 400;
`

export const NewAssignementAction = ({
  handleView
}: NewAssignemntProsp): ReactElement => {
  return (
    <Icon onClick={handleView}>
      <FontAwesomeIcon icon={['far', 'eye']} />
    </Icon>
  )
}

export const Wrapper = styled.div`
  width: 45%;
  padding-left: 8px;
  margin-top: -8px !important;
`
export const StyledReview = styled.span`
  padding: 6%;
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 48px;
  border: none;
`
export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0px;
  margin-left: 3%;
  margin-top: 4px;
`
