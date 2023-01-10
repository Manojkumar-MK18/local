import { ReactElement, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  ActionButton,
  ContainerWrapper,
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from '../../../components'
import ROUTES from '../../../const/routes'
import strings from '../../../locale/en'
import { RootState } from '../../../redux/store'
import { updateStaffDetails } from '../../../redux/userRegistration/action'
import { addAdminProps } from '../../../redux/userRegistration/types'
import DatePicker from 'react-datepicker'
import StaffValidation from './helper'
import { FieldProps } from './types'
import {
  hasFormError,
  validatePasswordifFilled
} from '../../../helpers/formValidation'
import {
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import moment from 'moment'
import { cognitoPoolData } from '../../../services'

const AddStaff = (): ReactElement => {
  const { values } = useSelector(
    (state: RootState) => ({
      values: state.userRegistration.addNewStaffDetails as addAdminProps
    }),
    shallowEqual
  )
  const history = useHistory()
  const dispatch = useDispatch()

  const [errors, seterrors] = useState({} as Record<string, string>)
  const [passVal, setpassVal] = useState<any>('')

  const userNumGen = Math.round(Math.random() * 100)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersFinder = Math.round(Math.random() * characters.length)
  const userName = `${values?.firstname}${userNumGen}${characters[
    charactersFinder
  ]?.toUpperCase()}`
  const DOB = moment(values?.dob).format('DD-MM-YYYY').replace(/-/g, '')
  const userPool = new CognitoUserPool(cognitoPoolData)

  const validateField = (fields: FieldProps): void => {
    seterrors(
      StaffValidation({
        values,
        errors,
        fields
      })
    )
  }

  const handleSubmit = (e: any) => {
    const ValidationError = StaffValidation({
      values,
      errors
    })
    if (hasFormError(ValidationError)) {
      seterrors(ValidationError)
    } else {
      e.preventDefault()
      if (!values?.userName) {
        dispatch(updateStaffDetails({ userName: userName }))
      }
      if (!values?.password) {
        dispatch(updateStaffDetails({ password: DOB }))
      }
      const attributeList = []

      const dataRole = {
        Name: 'custom:custom:role',
        Value: 'STAFF'
      }
      const dataFirstName = {
        Name: 'name',
        Value: values.firstname
      }
      const dataMobileNo = {
        Name: 'phone_number',
        Value: `+91${values.mobile}`
      }
      const dataDOB = {
        Name: 'birthdate',
        Value: moment(values.dob).format('DD-MM-YYYY')
      }
      const emao = {
        Name: 'email',
        Value: 'manil@gmail.com'
      }

      let attributeRole = new CognitoUserAttribute(dataRole)
      let attributeFirstName = new CognitoUserAttribute(dataFirstName)
      let attributeMobileNumber = new CognitoUserAttribute(dataMobileNo)
      let attributeDOB = new CognitoUserAttribute(dataDOB)
      let attributeemail = new CognitoUserAttribute(emao)
      attributeList.push(
        attributeRole,
        attributeFirstName,
        attributeMobileNumber,
        attributeDOB,
        attributeemail
      )

      userPool.signUp(
        values?.userName ? values?.userName : userName,
        values?.password ? values?.password : DOB,
        attributeList,
        [],
        ({ err, res }: any) => {
          if (err) {
            alert(err.message || JSON.stringify(err))
            return
          }
          let cognitoUser = res?.user
          console.log(cognitoUser?.getUsername())
        }
      )
      history.push(ROUTES.ADD_STAFF_DETAILS)
    }
  }

  const {
    users: {
      role,
      firstName,
      lastName,
      mobileNu,
      addnonTeacher,
      addTeacher: { userNames, password, DoB }
    },
    button: { save }
  } = strings

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={addnonTeacher} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input value="STAFF" isDisabled label={role} />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.firstname}
              label={firstName}
              placeholder={firstName}
              isRequired
              onBlur={() => {
                validateField('firstname')
              }}
              error={errors?.firstname}
              onChange={(value: string) => {
                const userId = Math.round(Math.random() * 500)
                dispatch(updateStaffDetails({ firstname: value }))
                dispatch(updateStaffDetails({ user_id: `${userId}` }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.lastname}
              label={lastName}
              placeholder={lastName}
              isRequired
              onBlur={() => {
                validateField('lastname')
              }}
              error={errors?.lastname}
              onChange={(value: string) => {
                dispatch(updateStaffDetails({ lastname: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.mobile}
              label={mobileNu}
              placeholder={mobileNu}
              onBlur={() => {
                validateField('mobile')
              }}
              error={errors?.mobile}
              isRequired
              onChange={(value: string) => {
                dispatch(updateStaffDetails({ mobile: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.userName}
              label={userNames}
              placeholder={userNames}
              onChange={(value: string) => {
                dispatch(updateStaffDetails({ userName: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.password}
              label={password}
              onBlur={() => {
                const error = validatePasswordifFilled(values?.password)
                setpassVal(error)
              }}
              error={passVal}
              placeholder={password}
              onChange={(value: string) => {
                dispatch(updateStaffDetails({ password: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={values.dob ? new Date(values?.dob) : new Date()}
              onSelect={(date: Date) => {
                dispatch(updateStaffDetails({ dob: date }))
              }}
              onChange={(date: Date) => {
                dispatch(updateStaffDetails({ dob: date }))
              }}
              placeholderText={DoB}
              customInput={
                <Input
                  value={values?.dob}
                  inputType="text"
                  isRequired
                  onBlur={() => {
                    validateField('dob')
                  }}
                  error={values?.dob ? '' : errors.dob}
                  placeholder={DoB}
                  label={DoB}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={(e: any) => handleSubmit(e)}>
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddStaff
