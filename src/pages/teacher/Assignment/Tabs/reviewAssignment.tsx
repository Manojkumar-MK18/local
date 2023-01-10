import { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  Loader,
  PageWrapper,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import ROUTES from '../../../../const/routes'
import {
  getTeacherBatchDropDown,
  getTeacherBranchDropDown
} from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getBatchByIds } from '../../../../redux/batch/api'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'
import ViewAction from './subcomponents'
import DatePicker from 'react-datepicker'
import { StudentGetAssignments } from '../../../../redux/student/api'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { format } from 'date-fns'
import {
  updateAssignmentId,
  updateAssignmentTitle,
  updateBatchName,
  updateBranchName
} from '../../../../redux/student/action'
import { getTeacherInsDetails } from '../../../../redux/teacherLeave/api'

const ReviewAssignment = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { teacherDetailsList, userInfo, GetAssignment, isLoading } =
    useSelector(
      (state: RootState) => ({
        teacherDetailsList: state.teacherLeave.getTeacherDetails,
        userInfo: state.user.userInfo,
        GetAssignment: state.student.GetAssignment,
        isLoading: state.student.isLoading
      }),
      shallowEqual
    )

  const branchDropdown = teacherDetailsList
    ? getTeacherBranchDropDown(teacherDetailsList)
    : []
  const batchDropdown = teacherDetailsList
    ? getTeacherBatchDropDown(teacherDetailsList)
    : []

  const [state, setState] = useState({
    branch: '',
    batch: '',
    assignment_date: ''
  })
  const {
    branch: { branchname },
    batch: { batchName },
    student: {
      assignment: { date }
    }
  } = strings

  useEffect(() => {
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    dispatch(
      getTeacherInsDetails({
        Institute_id: userInfo?.institute_id,
        user_id: userInfo?.user_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            placeholder={branchname}
            title={branchname}
            handleSelect={(item: DropdownListProps) => {
              setState({ ...state, branch: item.id })
              dispatch(
                getBatchByIds({
                  Institute_id: userInfo?.institute_id,
                  branch_id: item.id
                })
              )
            }}
            dropdownList={branchDropdown}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            placeholder={batchName}
            title={batchName}
            handleSelect={(item: DropdownListProps) => {
              setState({
                ...state,
                batch: item.id
              })
            }}
            dropdownList={batchDropdown}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              state.assignment_date
                ? new Date(state.assignment_date)
                : new Date()
            }
            onSelect={(date: Date) =>
              dispatch(
                StudentGetAssignments({
                  Institute_id: userInfo?.institute_id,
                  date: date ? format(date, DATE_FORMAT_YYYYMMDD) : '',
                  batch_id: state.batch,
                  branch_id: state.branch
                })
              )
            }
            onChange={(date: Date) => {
              setState({
                ...state,
                assignment_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
              })
            }}
            placeholderText={date}
            customInput={
              <Input
                value={state.assignment_date || ''}
                inputType="text"
                isRequired
                placeholder={date}
                label={date}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
      </FlexWrapper>
      <TableWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {GetAssignment.map((item, index) => (
                <TableRow key={index}>
                  <td>{index + 1}</td>
                  <td>{item.assignment_id}</td>
                  <td>{item.assignment_title}</td>
                  <td>{item.uploaded_date}</td>
                  <td>
                    <ViewAction
                      handleView={() => {
                        dispatch(updateAssignmentId(item.assignment_id))
                        dispatch(updateAssignmentTitle(item.assignment_title))
                        dispatch(updateBranchName(item.branch_name))
                        dispatch(updateBatchName(item.batch_name))
                        history.push(ROUTES.REVIEW_ASSIGNMENT)
                      }}
                    />
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </TableWrapper>
    </PageWrapper>
  )
}

export default ReviewAssignment
