import React, { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../../components'
import { DropdownListProps } from '../../../../../components/EditableDropdown/typings'
import {
  getBatchDropDown,
  getBranchDropDown,
  getCourseDropDown,
  getInstituteDropDown
} from '../../../../../helpers/dropdown'
import strings from '../../../../../locale/en'
import { getBranchByInstitute } from '../../../../../redux/branch/api'
import { getAllInstitutes } from '../../../../../redux/institute/api'
import { RootState } from '../../../../../redux/store'
import { tableHeader } from './const'
import AssignTeacherAction from '../subcomponent'
import {
  AssignTeacherApi,
  getUsersByBranch
} from '../../../../../redux/assign/api'
import { GetUsersByBranchProps } from '../../../../../redux/assign/types'
import AdminType from '../../../../../const/admin'
import { getBatchByIds } from '../../../../../redux/batch/api'
import { getAllCourse } from '../../../../../redux/course/api'

const AssignTeacher = (): ReactElement => {
  const {
    instituteList,
    branchList,
    batchList,
    courseList,
    userList,
    userName
  } = useSelector((state: RootState) => ({
    instituteList: state.institute.getInstituteList,
    branchList: state.branch.getBranchesList,
    batchList: state.batch.getBatchList,
    courseList: state.course.getCourseList,
    userList: state.assign.userByBranch,
    userName: state.user.userName
  }))
  const dispatch = useDispatch()
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const batchDropdown = batchList ? getBatchDropDown(batchList) : []
  const courseDropdown = courseList ? getCourseDropDown(courseList) : []

  console.log(new Date())

  const [state, setState] = useState({} as GetUsersByBranchProps)
  const [value, setValue] = useState({
    institute_id: '',
    institute_name: '',
    branch_id: '',
    branch_name: '',
    batch: [
      {
        batch_id: '',
        batch_name: ''
      }
    ]
  })
  const {
    institute: { name },
    branch: { branchname },
    batch: { courseName, batchName },
    assign: {
      assignTeacher: { title }
    }
  } = strings

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={name}
              title={name}
              handleSelect={(item: DropdownListProps) => {
                setState({ ...state, institute_id: item.id })
                setValue({
                  ...value,
                  institute_id: item.id,
                  institute_name: item.name
                })
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
              placeholder={branchname}
              title={branchname}
              handleSelect={(item: DropdownListProps) => {
                setState({
                  ...state,
                  branch_id: [{ branch_id: item.id }],
                  role: AdminType.TEACHER
                })
                setValue({
                  ...value,
                  branch_id: item.id,
                  branch_name: item.name
                })
                dispatch(
                  getBatchByIds({
                    Institute_id: state.institute_id,
                    branch_id: item.id
                  })
                )
              }}
              dropdownList={branchDropdown}
            />
          </DropdownWrapper>
          <DropdownWrapper marginTop="28px">
            <ActionButton
              onClick={() => {
                dispatch(getUsersByBranch(state))
              }}
            >
              Get Users
            </ActionButton>
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
              {userList.map((item, index) => (
                <TableRow key={index}>
                  <td>{index + 1}</td>
                  <td>{`${item?.firstname}${item.lastname}`}</td>
                  <td>
                    <EditableDropdown
                      dropdownList={courseDropdown}
                      placeholder={courseName}
                      width="70%"
                      handleSelect={() => {}}
                    />
                  </td>
                  <td>
                    <EditableDropdown
                      dropdownList={batchDropdown}
                      placeholder={batchName}
                      width="70%"
                      handleSelect={(item: DropdownListProps) => {
                        setValue({
                          ...value,
                          batch: [{ batch_id: item.id, batch_name: item.name }]
                        })
                      }}
                    />
                  </td>
                  <td>
                    <ActionButton
                      onClick={() => {
                        dispatch(
                          AssignTeacherApi({
                            ...value,
                            teacher_id: item.user_id,
                            teacher_name: `${item.firstname} ${item.lastname}`,
                            assigned_by: userName,
                            assigned_date: `${new Date()}`,
                            assign_teacher_id: item.user_id
                          })
                        )
                      }}
                    >
                      Assign
                    </ActionButton>
                  </td>
                  <td>
                    <AssignTeacherAction
                      handleDelete={() => {}}
                      handleEdit={() => {}}
                    />
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AssignTeacher
