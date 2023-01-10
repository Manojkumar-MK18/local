import { ReactElement, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { tableHeader } from './const'
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
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import strings from '../../../../locale/en'
import {
  getBatchDropDown,
  getBranchDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import {
  getAllInstitutes,
  getStudentByBranch,
  StudentAttendance
} from '../../../../redux/institute/api'
import StudentAttendenceAction from './subcomponents'
import { getBatchByIds } from '../../../../redux/batch/api'

const StudentAttendence = (): ReactElement => {
  const dispatch = useDispatch()
  const { instituteList, branchList, date, batchList, StudentByBranch } =
    useSelector(
      (state: RootState) => ({
        instituteList: state.institute.getInstituteList,
        branchList: state.branch.getBranchesList,
        date: state.institute.StudentAttendanceDate,
        batchList: state.batch.getBatchList,
        StudentByBranch: state.institute.StudentByBranch
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
    institute: { name },
    branch: { branchname },
    attenance: { studentAttenance },
    batch: { batchName }
  } = strings

  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const batchDropdown = batchList ? getBatchDropDown(batchList) : []

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
        <SectionTitle title={studentAttenance.title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noPadding>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={name}
              title={name}
              handleSelect={(item: DropdownListProps) => {
                setState({
                  ...state,
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
          <DropdownWrapper>
            <EditableDropdown
              placeholder={batchName}
              title={batchName}
              handleSelect={(item: DropdownListProps) => {
                setBatch({ batch_id: item.id, batch_name: item.name })
                dispatch(
                  getStudentByBranch({
                    institute_id: state.institute_id,
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
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {StudentByBranch.map((item, index) => (
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

export default StudentAttendence
