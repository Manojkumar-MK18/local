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
import { addAdminProps } from '../../../redux/userRegistration/types'
import moment from 'moment'
import {
  getBranchDropDown,
  getDepartmentDropDown,
  getDesginationDropDown,
  getInstituteDropDown
} from '../../../helpers/dropdown'
import { getDepartmentList } from '../../../redux/userRegistration/api'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { updateStaffDetails } from '../../../redux/userRegistration/action'
import { getAllInstitutes } from '../../../redux/institute/api'
import { getBranchByInstitute } from '../../../redux/branch/api'

const StaffPersonelInfo = (): ReactElement => {
  const {
    addNewStaffDetails,
    userRegistration: { bloodList, getDepartmentLists, genderList },
    instituteList,
    branchList
  } = useSelector((state: RootState) => ({
    addNewStaffDetails: state.userRegistration
      .addNewStaffDetails as addAdminProps,
    userRegistration: state.userRegistration,
    instituteList: state.institute.getInstituteList,
    branchList: state.branch.getBranchesList
  }))

  const dispatch = useDispatch()
  const departmentDropdown = getDepartmentLists
    ? getDepartmentDropDown(getDepartmentLists)
    : []

  const departmentFilterList = getDepartmentLists?.filter(
    (data) => data.department_id === addNewStaffDetails.department
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
            value={addNewStaffDetails?.user_role}
            isDisabled
            placeholder={role}
            label={role}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={addNewStaffDetails?.firstname}
            isDisabled
            placeholder={firstName}
            label={firstName}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={addNewStaffDetails?.lastname}
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
              dispatch(updateStaffDetails({ institute_id: item?.id }))
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
              dispatch(updateStaffDetails({ branch_id: ids }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={departmentDropdown}
            placeholder={department}
            title={department}
            isRequired
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateStaffDetails({ department: item?.id }))
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
              dispatch(updateStaffDetails({ designation: item?.id }))
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
              dispatch(updateStaffDetails({ gender: item?.id }))
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
              dispatch(updateStaffDetails({ blood_group: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={addNewStaffDetails?.fathername}
            placeholder={fatherName}
            label={fatherName}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ fathername: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={addNewStaffDetails?.spouse_name}
            placeholder={spouseName}
            label={spouseName}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ spouse_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={moment(addNewStaffDetails?.dob).format('DD-MM-YYYY')}
            placeholder={DoB}
            label={DoB}
            isDisabled
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              addNewStaffDetails?.date_of_joining
                ? new Date(addNewStaffDetails?.date_of_joining)
                : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateStaffDetails({ date_of_joining: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateStaffDetails({ date_of_joining: date }))
            }}
            placeholderText={DOJoining}
            customInput={
              <Input
                value={addNewStaffDetails?.date_of_joining}
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
            value={addNewStaffDetails?.profile_pictute}
            inputType="file"
            placeholder={profilePicture}
            label={profilePicture}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ profile_pictute: value }))
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default StaffPersonelInfo
