import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Button,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Loader,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../../components'
import { DropdownListProps } from '../../../../../components/EditableDropdown/typings'
import ROUTES from '../../../../../const/routes'
import { getInstituteDropDown } from '../../../../../helpers/dropdown'
import strings from '../../../../../locale/en'
import { getAllAssignedbyIds } from '../../../../../redux/assign/api'
import { getAllInstitutes } from '../../../../../redux/institute/api'
import { RootState } from '../../../../../redux/store'
import AssignLessonAction from '../../LessonPlane/subcomponents'
import { tableHeader } from './const'

const AssignedTeacherList = (): ReactElement => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { instituteList, assigned_Teacher_list, isLoading } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      assigned_Teacher_list: state.assign.getAssignedTeachers,
      isLoading: state.assign.isLoading
    })
  )

  console.log(assigned_Teacher_list)

  const {
    assign: {
      assignTeacher: { list, title }
    },
    institute: { name }
  } = strings

  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []

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
      <FlexWrapper noPadding justifyContent="space-between">
        <SectionTitle title={list} />
        <Button onClick={() => history.push(ROUTES.ASSIGN_TEACHER)}>
          {title}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={name}
              title={name}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getAllAssignedbyIds({
                    Institute_id: item?.id
                  })
                )
              }}
              dropdownList={instituteDropdown}
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
                {assigned_Teacher_list?.map((list, index) =>
                  list?.branch?.map((branchList) =>
                    branchList?.teachers?.map((data, i) => {
                      const { teacher_name } = data
                      return (
                        <TableRow key={index}>
                          <td>{i + 1}</td>
                          <td>{teacher_name}</td>
                          <td>{list.institute_name}</td>
                          <td>{branchList.branch_name}</td>
                          <td>
                            <AssignLessonAction handleEdit={() => {}} />
                          </td>
                        </TableRow>
                      )
                    })
                  )
                )}
              </tbody>
            </Table>
          )}
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AssignedTeacherList
