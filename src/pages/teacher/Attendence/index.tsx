import { ReactElement, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
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
} from '../../../components'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { RootState } from '../../../redux/store'
import strings from '../../../locale/en'
import {
  getTeacherBatchDropDown,
  getTeacherBranchDropDown
} from '../../../helpers/dropdown'
import {
  getStudentByBranch,
  StudentAttendance
} from '../../../redux/institute/api'
import StudentAttendenceAction from './subcomponents'
import { getBatchByIds } from '../../../redux/batch/api'
import { getBranchByInstitute } from '../../../redux/branch/api'
import { getTeacherInsDetails } from '../../../redux/teacherLeave/api'

const TcStudentAttendence = (): ReactElement => {
  const dispatch = useDispatch()
  const { teacherDetailsList, date, StudentByBranch, userInfo } = useSelector(
    (state: RootState) => ({
      teacherDetailsList: state.teacherLeave.getTeacherDetails,
      date: state.institute.StudentAttendanceDate,
      StudentByBranch: state.institute.StudentByBranch,
      userInfo: state.user.userInfo
    }),
    shallowEqual
  )

  const [state, setState] = useState({
    attendance_id: `${Math.random() * 500}`,
    institute_id: '',
    institute_name: '',
    branch_id: '',
    branch_name: '',
    username: 'test',
    date: date,
    subject: 'sample'
  })
  const [batch, setBatch] = useState({ batch_id: '', batch_name: '' })
  const [isPresent, setIsPresent] = useState<Array<any>>([])
  const [isAbsent, setIsAbsent] = useState<Array<any>>([])

  const {
    branch: { branchname },
    attenance: { studentAttenance },
    batch: { batchName }
  } = strings

  const batchDropdown = teacherDetailsList
    ? getTeacherBatchDropDown(teacherDetailsList)
    : []
  const branchDropdown = teacherDetailsList
    ? getTeacherBranchDropDown(teacherDetailsList)
    : []

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
      <FlexWrapper noMargin>
        <SectionTitle title={studentAttenance.title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin noPadding>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={branchname}
              title={branchname}
              handleSelect={(item: DropdownListProps) => {
                setState({
                  ...state,
                  branch_id: item.id,
                  branch_name: item.name
                })
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
                setBatch({ batch_id: item.id, batch_name: item.name })
                dispatch(
                  getStudentByBranch({
                    institute_id: userInfo?.institute_id,
                    branch_id: state.branch_id,
                    batch_id: item.id
                  })
                )
              }}
              dropdownList={batchDropdown}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                <th>Students Id</th>
                <th>Student Name</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Action</th>
              </TableRow>
            </TableHeader>
            <tbody>
              {StudentByBranch?.map((item, index) => (
                <TableRow key={index}>
                  <td>{item.user_id}</td>
                  <td>
                    {item.firstname} {item.lastname}
                  </td>
                  <td>
                    <Form.Check
                      key={item?.user_id}
                      name={item?.firstname}
                      id={item?.user_id}
                      checked={isPresent?.some(
                        (items) => items.student_id === item.user_id
                      )}
                      onClick={(e: any) => {
                        const { checked } = e.target
                        if (checked) {
                          setIsPresent([
                            ...isPresent,
                            {
                              student_id: item.user_id,
                              student_name: item.firstname,
                              date: date,
                              is_present: true,
                              remarks: 'qwerty'
                            }
                          ])
                          setIsAbsent(
                            isAbsent?.filter(
                              (items) => items?.student_id !== item?.user_id
                            )
                          )
                        } else if (!checked) {
                          setIsPresent(
                            isPresent?.filter(
                              (items) => items?.student_id !== item?.user_id
                            )
                          )
                        }
                      }}
                    />
                  </td>
                  <td>
                    <Form.Check
                      name={'false'}
                      checked={isAbsent?.some(
                        (items) => items.student_id === item.user_id
                      )}
                      onClick={(e: any) => {
                        const { checked } = e.target
                        if (checked) {
                          setIsAbsent([
                            ...isAbsent,
                            {
                              student_id: item.user_id,
                              student_name: item.firstname,
                              date: date,
                              is_present: false,
                              remarks: 'qwerty'
                            }
                          ])
                          setIsPresent(
                            isPresent?.filter(
                              (items) => items?.student_id !== item?.user_id
                            )
                          )
                        } else if (!checked) {
                          setIsAbsent(
                            isAbsent?.filter(
                              (items) => items?.student_id !== item?.user_id
                            )
                          )
                        }
                      }}
                    />
                  </td>

                  <td>
                    <StudentAttendenceAction
                      handleDelete={() => {}}
                      handleEdit={() => {}}
                    />
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
        <FlexWrapper justifyContent="center" noMargin>
          <ActionButton
            onClick={() => {
              dispatch(
                StudentAttendance({
                  ...state,
                  batch: [
                    {
                      batch_id: batch.batch_id,
                      batch_name: batch.batch_name,
                      attendance_list: isPresent.concat(isAbsent)
                    }
                  ]
                })
              )
            }}
          >
            Submit
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default TcStudentAttendence
