import React, { ReactElement } from 'react'
import {
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper
} from '../../../components'
import strings from '../../../locale/en'
import DatePicker from 'react-datepicker'
import { RootState } from '../../../redux/store'
import { addAdminProps } from '../../../redux/userRegistration/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { updateStaffDetails } from '../../../redux/userRegistration/action'

const StaffEducationQualfication = (): ReactElement => {
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
        educationalBackground,
        yearofCompletion,
        yofExperience,
        collageName,
        collageCity,
        previousCompanyOrInsName
      }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <Input
            value={values.educational_background}
            placeholder={educationalBackground}
            label={educationalBackground}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ educationalBackground: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              values?.completion_year
                ? new Date(values?.completion_year)
                : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateStaffDetails({ completion_year: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateStaffDetails({ completion_year: date }))
            }}
            placeholderText={yearofCompletion}
            customInput={
              <Input
                value={values?.completion_year}
                inputType="text"
                isRequired
                placeholder={yearofCompletion}
                label={yearofCompletion}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values.collage_name}
            placeholder={collageName}
            label={collageName}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ collage_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values.educational_background}
            placeholder={collageCity}
            label={collageCity}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ collageCity: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              values?.expericence ? new Date(values?.expericence) : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateStaffDetails({ expericence: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateStaffDetails({ expericence: date }))
            }}
            placeholderText={yofExperience}
            customInput={
              <Input
                value={values?.expericence}
                inputType="text"
                isRequired
                placeholder={yofExperience}
                label={yofExperience}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values.previous_institutename}
            placeholder={previousCompanyOrInsName}
            label={previousCompanyOrInsName}
            onChange={(value: string) => {
              dispatch(updateStaffDetails({ previous_institutename: value }))
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default StaffEducationQualfication
