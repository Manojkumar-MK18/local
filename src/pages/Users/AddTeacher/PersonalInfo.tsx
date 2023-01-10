import { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper
} from '../../../components'
import strings from '../../../locale/en'
import DatePicker from 'react-datepicker'
import { RootState } from '../../../redux/store'
import moment from 'moment'
import { getDepartmentList } from '../../../redux/userRegistration/api'
import {
  getBranchDropDown,
  getDepartmentDropDown,
  getDesginationDropDown,
  getInstituteDropDown
} from '../../../helpers/dropdown'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { updateTeacherDetails } from '../../../redux/userRegistration/action'
import { getAllInstitutes } from '../../../redux/institute/api'
import { getBranchByInstitute } from '../../../redux/branch/api'
import { addAdminProps } from '../../../redux/userRegistration/types'

const TeacherPersonelInfo = (): ReactElement => {
  const {
    teacherSetValue,
    userRegistration: { genderList, bloodList, getDepartmentLists },
    instituteList,
    branchList
  } = useSelector((state: RootState) => ({
    teacherSetValue: state.userRegistration.addTeacher as addAdminProps,
    userRegistration: state.userRegistration,
    instituteList: state.institute.getInstituteList,
    branchList: state.branch.getBranchesList
  }))
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch()
  const departmentDropDown = getDepartmentLists
    ? getDepartmentDropDown(getDepartmentLists)
    : []

  const departmentFilterList = getDepartmentLists?.filter(
    (data) => data.department_id === teacherSetValue.department
  )
  const desginationDropDown = departmentFilterList
    ? getDesginationDropDown(departmentFilterList)
    : []
  const instituteDRopdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []

  const {
    branch: { instituteId, branchname },
    users: {
      role,
      firstName,
      lastName,
      addTeacher: {
        department,
        designation,
        bloodGroup,
        gender,
        fatherName,
        spouseName,
        DoB,
        DOJoining,
        profilePicture
      }
    }
  } = strings

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    dispatch(getDepartmentList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.user_role}
            isDisabled
            placeholder={role}
            label={role}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.firstname}
            isDisabled
            placeholder={firstName}
            label={firstName}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.lastname}
            isDisabled
            placeholder={lastName}
            label={lastName}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={instituteDRopdown}
            placeholder={instituteId}
            title={instituteId}
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ institute_id: item?.id }))
              dispatch(
                getBranchByInstitute({
                  Institute_id: item?.id
                })
              )
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={branchDropdown}
            placeholder={branchname}
            title={branchname}
            isMultiChoice
            handleMultiSelect={(item) => {
              const ids = item?.map((id: DropdownListProps) => id?.id)
              dispatch(updateTeacherDetails({ branch_id: ids }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={departmentDropDown}
            placeholder={department}
            title={department}
            isRequired
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ department: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={desginationDropDown}
            placeholder={designation}
            title={designation}
            isRequired
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ designation: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={genderList}
            placeholder={gender}
            title={gender}
            isRequired
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ gender: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={bloodList}
            placeholder={bloodGroup}
            title={bloodGroup}
            isRequired
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ blood_group: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.fathername}
            placeholder={fatherName}
            label={fatherName}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ fathername: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.spouse_name}
            placeholder={spouseName}
            label={spouseName}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ spouse_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={moment(teacherSetValue?.dob).format('DD-MM-YYYY')}
            placeholder={DoB}
            label={DoB}
            isDisabled
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              teacherSetValue?.date_of_joining
                ? new Date(teacherSetValue?.date_of_joining)
                : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateTeacherDetails({ date_of_joining: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateTeacherDetails({ date_of_joining: date }))
            }}
            placeholderText={DOJoining}
            customInput={
              <Input
                value={teacherSetValue?.date_of_joining}
                inputType="text"
                isRequired
                placeholder={DOJoining}
                label={DOJoining}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={teacherSetValue?.profile_pictute}
            inputType="file"
            placeholder={profilePicture}
            label={profilePicture}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ profile_pictute: value }))
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default TeacherPersonelInfo
