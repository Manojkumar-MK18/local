import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper
} from '../../../components'
import strings from '../../../locale/en'
import { RootState } from '../../../redux/store'
import { updateStaffDetails } from '../../../redux/userRegistration/action'
import { addAdminProps } from '../../../redux/userRegistration/types'

const StaffContactInfo = () => {
  const { values } = useSelector(
    (state: RootState) => ({
      values: state.userRegistration.addNewStaffDetails as addAdminProps
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const {
    users: {
      addTeacher: {
        mobileNumber,
        eMail,
        address,
        pincode,
        state,
        city,
        area,
        emergencyContact,
        emergencyContactPerson
      }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <Input
            value={values?.mobile}
            placeholder={mobileNumber}
            label={mobileNumber}
            isDisabled
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.email}
            placeholder={eMail}
            label={eMail}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ email: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.address}
            placeholder={address}
            label={address}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ address: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.pincode}
            placeholder={pincode}
            label={pincode}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ pincode: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.state}
            placeholder={state}
            label={state}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ state: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.city}
            placeholder={city}
            label={city}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ city: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.area_name}
            placeholder={area}
            label={area}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ area_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.emergency_connumber}
            placeholder={emergencyContact}
            label={emergencyContact}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ emergency_connumber: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.emergnecy_contact_person}
            placeholder={emergencyContactPerson}
            label={emergencyContactPerson}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ emergnecy_contact_person: value }))
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default StaffContactInfo
