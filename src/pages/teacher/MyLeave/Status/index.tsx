import { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { getBranchDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'

const LeaveStatus = (): ReactElement => {
  const dispatch = useDispatch()
  const { branchList, userInfo } = useSelector((state: RootState) => ({
    branchList: state.branch.getBranchesList,
    userInfo: state.user.userInfo
  }))

  const branchDropdown = branchList ? getBranchDropDown(branchList) : []

  const [state, setState] = useState({ branch: '', batch: '' })
  const {
    branch: { branchname }
  } = strings

  useEffect(() => {
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={'Leave Status'} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={branchname}
              title={'Select Branch'}
              handleSelect={(item: DropdownListProps) => {
                setState({ ...state, branch: item.id })
              }}
              dropdownList={branchDropdown}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>01</td>
                <td>Leave Type</td>
                <td>Date From</td>
                <td>Date to</td>
                <td>Time From</td>
                <td>Time To</td>
                <td>Status</td>
                <td>Approved By</td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LeaveStatus
