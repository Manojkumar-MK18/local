/* eslint-disable no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import {
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../components'
import { CardWrapper, ChartWrapper, FilterWrapper, Icon } from './subcomponents'
import student from '../../../assets/graduating-student.png'
import teacher from '../../../assets/teacher.png'
import staff from '../../../assets/teamwork.png'
import DashboardCount from './count'
import strings from '../../../locale/en'
import PieChart from './pieChart'
import BarChart from './barChart'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import {
  getBatchDropDown,
  getBranchDropDown,
  getInstituteDropDown
} from '../../../helpers/dropdown'
import { getAllInstitutes } from '../../../redux/institute/api'
import { getBranchByInstitute } from '../../../redux/branch/api'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { getBatchByIds } from '../../../redux/batch/api'
import { getAdminListbyId } from '../../../redux/userRegistration/api'
import AdminType from '../../../const/admin'

const DashBoard = (): ReactElement => {
  const { instituteList, branchList, batchList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      branchList: state.branch.getBranchesList,
      batchList: state.batch.getBatchList
    }),
    shallowEqual
  )
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const batchDropdown = batchList ? getBatchDropDown(batchList) : []

  const [showFilter, setShowFilter] = useState(false)
  const [instituteId, setinstituteId] = useState('')
  const dispatch = useDispatch()

  const {
    dashboard: { title, staffCount, studentCount, teacherCount }
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
      <FlexWrapper justifyContent="space-between">
        <SectionTitle title={title} />
        <FilterWrapper onClick={() => setShowFilter((pre) => !pre)}>
          <Icon icon={['fas', 'sliders']} />
        </FilterWrapper>
      </FlexWrapper>
      {showFilter && (
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={instituteDropdown}
              placeholder="Select Institute"
              handleSelect={(item: DropdownListProps) => {
                setinstituteId(item?.id)
                dispatch(
                  getBranchByInstitute({
                    Institute_id: item?.id
                  })
                )
                dispatch(
                  getAdminListbyId({
                    institute_id: item?.id,
                    user_role: AdminType.STUDENT
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={branchDropdown}
              placeholder="Select Branch"
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getBatchByIds({
                    Institute_id: instituteId,
                    branch_id: item?.id
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={batchDropdown}
              placeholder="Select Batch"
              handleSelect={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
      )}
      <CardWrapper>
        <DashboardCount title={studentCount} count={10112} src={student} />
        <DashboardCount title={teacherCount} count={92} src={teacher} />
        <DashboardCount title={staffCount} count={112} src={staff} />
      </CardWrapper>
      <ChartWrapper>
        <PieChart />
        <BarChart />
      </ChartWrapper>
    </PageWrapper>
  )
}

export default DashBoard
