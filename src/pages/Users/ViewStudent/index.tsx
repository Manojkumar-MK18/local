import { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
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
} from '../../../components'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import AdminType from '../../../const/admin'
import { getInstituteDropDown } from '../../../helpers/dropdown'
import strings from '../../../locale/en'
import {
  updateSelectedStudentFeesDetails,
  updateUserDetails
} from '../../../redux/fms/actions'
import { getFmsListByCourseIds } from '../../../redux/fms/api'
import { getAllInstitutes } from '../../../redux/institute/api'
import { RootState } from '../../../redux/store'
import { getAdminListbyId } from '../../../redux/userRegistration/api'
import { tableHeader } from './const'

const ViewStudent = (): ReactElement => {
  const { instituteList, getTeacherLists, isLoading, branchList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      getTeacherLists: state.userRegistration.getAdminLists,
      isLoading: state.userRegistration.isLoading,
      getFmsList: state.fms.getFmsList,
      branchList: state.branch.getBranchesList
    }),
    shallowEqual
  )

  const [instituteIds, setinstituteIds] = useState('')
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []

  const CourseIsFeeApplicable = getTeacherLists?.map((d) =>
    d?.course?.filter((is) => is?.is_fee_applicable === true)
  )
  const dispatch = useDispatch()

  const {
    branch: { instituteId },
    users: {
      viewStudent: { title }
    }
  } = strings

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
      <FlexWrapper>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={instituteDropdown}
              placeholder={instituteId}
              title={instituteId}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getAdminListbyId({
                    institute_id: item?.id,
                    user_role: AdminType.STUDENT
                  })
                )
                setinstituteIds(item?.id)
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        {isLoading ? (
          <Loader />
        ) : (
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
                {getTeacherLists?.map((lists, index) => {
                  const {
                    firstname,
                    lastname,
                    mobile,
                    email,
                    status,
                    branch_id,
                    institute_id,
                    user_id,
                    fees_paid,
                    year,
                    batch_name
                  } = lists
                  return (
                    <TableRow key={index}>
                      <td>{firstname}</td>
                      <td>{lastname}</td>
                      <td>{email}</td>
                      <td>{mobile}</td>
                      <td>{status}</td>
                      <td>
                        <ActionButton
                          disabled={!instituteIds}
                          onClick={() => {
                            let CourseId = CourseIsFeeApplicable[index]?.map(
                              (id) => id?.course_id
                            )
                            let CourseName = CourseIsFeeApplicable[index]?.map(
                              (id) => id?.course_name
                            )
                            const branchName = branchList?.map((dd) =>
                              dd?.branches
                                ?.filter((s) => s?.name)
                                .map((nam) => nam?.name)
                            )
                            console.log('branchName', branchName)
                            const setSelectedIds = {
                              userid: user_id,
                              insId: institute_id,
                              branchId: branch_id,
                              courseId: CourseId,
                              year: year,
                              name: `${firstname}${lastname}`,
                              branchName: `${branchName}`,
                              batchName: batch_name,
                              courseName: CourseName
                            }
                            dispatch(
                              getFmsListByCourseIds({
                                Institute_id: instituteIds,
                                branch_id: branch_id,
                                course_id: CourseId
                              })
                            )
                            dispatch(updateUserDetails(setSelectedIds))
                            dispatch(
                              updateSelectedStudentFeesDetails(fees_paid)
                            )
                          }}
                        >
                          Pay
                        </ActionButton>
                      </td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default ViewStudent
