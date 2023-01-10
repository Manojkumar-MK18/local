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
import { updateTeacherDetails } from '../../../redux/userRegistration/action'
import { addAdminProps } from '../../../redux/userRegistration/types'

const TeacherContactInfo = () => {
  const { values } = useSelector(
    (state: RootState) => ({
      values: state.userRegistration.addTeacher as addAdminProps
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
              dispatch(updateTeacherDetails({ email: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.address}
            placeholder={address}
            label={address}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ address: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.pincode}
            placeholder={pincode}
            label={pincode}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ pincode: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.state}
            placeholder={state}
            label={state}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ state: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.city}
            placeholder={city}
            label={city}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ city: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.area_name}
            placeholder={area}
            label={area}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ area_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.emergency_connumber}
            placeholder={emergencyContact}
            label={emergencyContact}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ emergency_connumber: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.emergnecy_contact_person}
            placeholder={emergencyContactPerson}
            label={emergencyContactPerson}
            onChange={(value: string) => {
              dispatch(
                updateTeacherDetails({ emergnecy_contact_person: value })
              )
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default TeacherContactInfo
