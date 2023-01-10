import { ReactElement, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LeaveDetails, tableHeader } from './const'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  Modal,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import strings from '../../../../locale/en'
import {
  getBranchDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import { getAllInstitutes } from '../../../../redux/institute/api'
import StaffAttendenceAction from './subcomponents'

const StaffAttendence = (): ReactElement => {
  const dispatch = useDispatch()
  const { instituteList, branchList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      branchList: state.branch.getBranchesList
    }),
    shallowEqual
  )

  const [check, setCheck] = useState({ present: false, absent: false })
  const [time, setTime] = useState({ from_time: '', to_time: '' })
  const [leaveDetails, setLeaveDetails] = useState({ id: '', name: '' })

  const {
    attenance: { staffattenanace }
  } = strings

  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={staffattenanace.title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noPadding>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Select Institute'}
              title={'Select Institute'}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getBranchByInstitute({
                    Institute_id: item?.id
                  })
                )
              }}
              dropdownList={instituteDropdown}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Select Branch'}
              title={'Select Branch'}
              handleSelect={() => {}}
              dropdownList={branchDropdown}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Select Department'}
              title={'Select Department'}
              handleSelect={() => {}}
              dropdownList={[]}
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
                <td>Staff Designation</td>
                <td>Demo</td>
                <td>In Time</td>
                <td>Out Time</td>
                <td>
                  <Form.Check
                    name={'True'}
                    checked={check.present}
                    onClick={() => {
                      setCheck({ ...check, present: !check.present })
                    }}
                  />
                </td>
                <td>
                  <Form.Check
                    name={'True'}
                    checked={check.absent}
                    onClick={() => {
                      setCheck({ ...check, absent: !check.absent })
                    }}
                  />
                </td>

                <td>
                  <StaffAttendenceAction
                    handleDelete={() => {}}
                    handleEdit={() => {}}
                  />
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
        {check.absent ? (
          <Modal
            handleCancel={() => {
              setCheck({ ...check, absent: false })
              setLeaveDetails({ id: '', name: '' })
              setTime({ from_time: '', to_time: '' })
            }}
            handleSubmit={() => {
              setCheck({ ...check, absent: false })
              setLeaveDetails({ id: '', name: '' })
              setTime({ from_time: '', to_time: '' })
            }}
            isLargeModal
            title="Leave Details"
          >
            <FlexWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  placeholder={'Leave Details'}
                  title={'Leave Details'}
                  handleSelect={(item: DropdownListProps) => {
                    setLeaveDetails({ id: item.id, name: item.name })
                  }}
                  dropdownList={LeaveDetails}
                />
              </DropdownWrapper>
              {leaveDetails.id === '03' ? (
                <>
                  <DropdownWrapper>
                    <Input
                      value={time.from_time}
                      inputType="time"
                      label="From Time"
                      onChange={(value: string) => {
                        setTime({ ...time, from_time: value })
                      }}
                    />
                  </DropdownWrapper>
                  <DropdownWrapper>
                    <Input
                      value={time.to_time}
                      inputType="time"
                      label="To Time"
                      onChange={(value: string) => {
                        setTime({ ...time, to_time: value })
                      }}
                    />
                  </DropdownWrapper>
                </>
              ) : null}
            </FlexWrapper>
          </Modal>
        ) : null}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default StaffAttendence
