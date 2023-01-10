import { ReactElement, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { tableHeader } from './const'
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
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import strings from '../../../../locale/en'
import {
  getBranchDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import { getAllInstitutes } from '../../../../redux/institute/api'
import TeacherAttendenceAction from './subcomponents'

const TeacherAttendence = (): ReactElement => {
  const dispatch = useDispatch()
  const { instituteList, branchList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      branchList: state.branch.getBranchesList
    }),
    shallowEqual
  )

  const [check, setCheck] = useState({ present: false, absent: false })

  const {
    institute: { name },
    branch: { branchname },
    attenance: { teacherAttenanace }
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
        <SectionTitle title={teacherAttenanace.title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noPadding>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={name}
              title={name}
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
              placeholder={branchname}
              title={branchname}
              handleSelect={() => {}}
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
                <td>1</td>
                <td>Demo</td>
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
                  <TeacherAttendenceAction
                    handleDelete={() => {}}
                    handleEdit={() => {}}
                  />
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default TeacherAttendence
