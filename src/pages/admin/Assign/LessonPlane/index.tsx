import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
import ROUTES from '../../../../const/routes'
import {
  getBranchDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import AssignLessonAction from './subcomponents'
import { tableHeader } from './const'
import { updateLessonPlan } from '../../../../redux/assign/action'

const LessonPalne = (): ReactElement => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { instituteList, branchList, updateLesson } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      branchList: state.branch.getBranchesList,
      updateLesson: state.assign.updateLesson
    }),
    shallowEqual
  )

  const {
    assign: {
      assignLessonPlane: { title }
    },
    institute: { name },
    branch: { branchname }
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
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
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
                dispatch(
                  updateLessonPlan({ ...updateLesson, institute_id: item.id })
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
                dispatch(
                  updateLessonPlan({ ...updateLesson, branch_id: item.id })
                )
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
                <td>1</td>
                <td>Demo</td>
                <td>
                  <ActionButton
                    onClick={() => {
                      history.push(ROUTES.ASSIGN_LESSON)
                    }}
                  >
                    Assign
                  </ActionButton>
                </td>
                <td>
                  <AssignLessonAction handleEdit={() => {}} />
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LessonPalne
