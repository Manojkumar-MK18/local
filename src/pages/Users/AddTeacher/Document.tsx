import React from 'react'
import {
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper
} from '../../../components'
import strings from '../../../locale/en'
import DatePicker from 'react-datepicker'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { addAdminProps } from '../../../redux/userRegistration/types'
import { updateTeacherDetails } from '../../../redux/userRegistration/action'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'

const TeacherDocument = () => {
  const {
    userRegistration: { contractList },
    values
  } = useSelector(
    (state: RootState) => ({
      userRegistration: state.userRegistration,
      values: state.userRegistration.addTeacher as addAdminProps
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const {
    users: {
      addTeacher: {
        bankAccNumb,
        bankBranch,
        bankName,
        BankIfsc,
        panNumber,
        passportExpiry,
        passportNumber,
        pfAccNumber,
        esiAccountNumber,
        countyIssue,
        contactType,
        contractStartDate
      }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <Input
            value={values?.bank_name}
            placeholder={bankName}
            label={bankName}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ bank_name: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.bank_account_no}
            placeholder={bankAccNumb}
            label={bankAccNumb}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ bank_account_no: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.bank_ifsc}
            placeholder={BankIfsc}
            label={BankIfsc}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ bank_ifsc: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.bank_branch}
            placeholder={bankBranch}
            label={bankBranch}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ bank_branch: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.PAN_number}
            placeholder={panNumber}
            label={panNumber}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ PAN_number: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.PF_account_number}
            placeholder={pfAccNumber}
            label={pfAccNumber}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ PF_account_number: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.EPS_account_number}
            placeholder={esiAccountNumber}
            label={esiAccountNumber}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ EPS_account_number: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.passport_no}
            placeholder={passportNumber}
            label={passportNumber}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ passport_no: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value={values?.country_of_issue}
            placeholder={countyIssue}
            label={countyIssue}
            onChange={(value: string) => {
              dispatch(updateTeacherDetails({ country_of_issue: value }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              values?.passport_expiry
                ? new Date(values?.passport_expiry)
                : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateTeacherDetails({ passport_expiry: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateTeacherDetails({ passport_expiry: date }))
            }}
            placeholderText={passportExpiry}
            customInput={
              <Input
                value={values?.passport_expiry}
                inputType="text"
                isRequired
                placeholder={passportExpiry}
                label={passportExpiry}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={contractList}
            placeholder={contactType}
            title={contactType}
            handleSelect={(item: DropdownListProps) => {
              dispatch(updateTeacherDetails({ contract_type: item?.id }))
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePicker
            selected={
              values?.contract_start_date
                ? new Date(values?.contract_start_date)
                : new Date()
            }
            onSelect={(date: Date) => {
              dispatch(updateTeacherDetails({ contract_start_date: date }))
            }}
            onChange={(date: Date) => {
              dispatch(updateTeacherDetails({ contract_start_date: date }))
            }}
            placeholderText={contractStartDate}
            customInput={
              <Input
                value={values?.contract_start_date}
                inputType="text"
                isRequired
                placeholder={contractStartDate}
                label={contractStartDate}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default TeacherDocument
