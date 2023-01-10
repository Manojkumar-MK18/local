import React, { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
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
import { getAllInstitutes } from '../../../redux/institute/api'
import { RootState } from '../../../redux/store'
import { getAdminListbyId } from '../../../redux/userRegistration/api'
import { tableHeader } from './const'

const ViewTeacher = (): ReactElement => {
  const { instituteList, getTeacherLists, isLoading } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      getTeacherLists: state.userRegistration.getAdminLists,
      isLoading: state.userRegistration.isLoading
    }),
    shallowEqual
  )

  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []

  const dispatch = useDispatch()

  const {
    branch: { instituteId },
    users: {
      viewTeacher: { title }
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

  console.log(getTeacherLists)

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
                    user_role: AdminType.TEACHER
                  })
                )
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
                  const { firstname, lastname, mobile, email, status } = lists
                  return (
                    <TableRow key={index}>
                      <td>{firstname}</td>
                      <td>{lastname}</td>
                      <td>{email}</td>
                      <td>{mobile}</td>
                      <td>{status}</td>
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

export default ViewTeacher
