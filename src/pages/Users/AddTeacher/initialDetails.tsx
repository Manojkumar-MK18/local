import React, { ReactElement, useState } from 'react'
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
import { updateTeacherDetails } from '../../../redux/userRegistration/action'
import { addAdminProps } from '../../../redux/userRegistration/types'
import DatePicker from 'react-datepicker'
import {
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import moment from 'moment'
import { cognitoPoolData } from '../../../services'
import { FieldProps } from './types'
import TeacherValidation from './helper'
import {
  hasFormError,
  validatePasswordifFilled
} from '../../../helpers/formValidation'

const AddTeacher = (): ReactElement => {
  const { teacherProps } = useSelector(
    (state: RootState) => ({
      teacherProps: state.userRegistration.addTeacher as addAdminProps
    }),
    shallowEqual
  )
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    users: {
      role,
      firstName,
      lastName,
      mobileNu,
      addTeacher: { title, userNames, password, DoB }
    },
    button: { save }
  } = strings

  const [errors, setErrors] = useState({} as Record<string, string>)
  const [passVal, setpassVal] = useState<any>('')

  const validateField = (fields: FieldProps) => {
    setErrors(
      TeacherValidation({
        teacherProps,
        fields,
        errors
      })
    )
  }

  const userNumGen = Math.round(Math.random() * 100)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersFinder = Math.round(Math.random() * characters.length)
  const userName = `${teacherProps?.firstname}${userNumGen}${characters[
    charactersFinder
  ]?.toUpperCase()}`
  const DOB = moment(teacherProps?.dob).format('DD-MM-YYYY').replace(/-/g, '')
  const userPool = new CognitoUserPool(cognitoPoolData)

  const handleSubmit = (e: any) => {
    const ValidationError = TeacherValidation({
      teacherProps,
      errors
    })
    if (hasFormError(ValidationError)) {
      setErrors(ValidationError)
    } else {
      e.preventDefault()
      const attributeList = []

      const dataRole = {
        Name: 'custom:custom:role',
        Value: 'TEACHER'
      }
      const dataFirstName = {
        Name: 'name',
        Value: teacherProps.firstname
      }
      const dataMobileNo = {
        Name: 'phone_number',
        Value: `+91${teacherProps.mobile}`
      }
      const dataDOB = {
        Name: 'birthdate',
        Value: moment(teacherProps.dob).format('DD-MM-YYYY')
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
        teacherProps?.userName ? teacherProps?.userName : userName,
        teacherProps?.password ? teacherProps?.password : DOB,
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
      if (!teacherProps?.userName) {
        dispatch(updateTeacherDetails({ userName: userName }))
      }
      if (!teacherProps?.password) {
        dispatch(updateTeacherDetails({ password: DOB }))
      }
      history.push(ROUTES.ADD_TEACHER_DETAILS)
    }
  }

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input value={teacherProps?.user_role} isDisabled label={role} />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={teacherProps?.firstname}
              label={firstName}
              placeholder={firstName}
              isRequired
              onBlur={() => {
                validateField('firstname')
              }}
              error={errors.firstname}
              onChange={(value: string) => {
                const userId = Math.round(Math.random() * 500)
                dispatch(updateTeacherDetails({ firstname: value }))
                dispatch(updateTeacherDetails({ user_id: `${userId}` }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={teacherProps?.lastname}
              label={lastName}
              placeholder={lastName}
              isRequired
              onBlur={() => {
                validateField('lastname')
              }}
              error={errors.lastname}
              onChange={(value: string) => {
                dispatch(updateTeacherDetails({ lastname: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={teacherProps?.mobile}
              label={mobileNu}
              placeholder={mobileNu}
              onBlur={() => {
                validateField('mobile')
              }}
              error={errors.mobile}
              isRequired
              onChange={(value: any) => {
                dispatch(updateTeacherDetails({ mobile: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={teacherProps?.userName}
              label={userNames}
              placeholder={userNames}
              onChange={(value: string) => {
                dispatch(updateTeacherDetails({ userName: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={teacherProps?.password}
              label={password}
              onBlur={() => {
                const error = validatePasswordifFilled(teacherProps?.password)
                setpassVal(error)
              }}
              error={passVal}
              placeholder={password}
              onChange={(value: string) => {
                dispatch(updateTeacherDetails({ password: value }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={
                teacherProps.dob ? new Date(teacherProps?.dob) : new Date()
              }
              onSelect={(date: Date) => {
                dispatch(updateTeacherDetails({ dob: date }))
              }}
              onChange={(date: Date) => {
                dispatch(updateTeacherDetails({ dob: date }))
              }}
              placeholderText={DoB}
              customInput={
                <Input
                  value={teacherProps?.dob}
                  inputType="text"
                  isRequired
                  onBlur={() => {
                    validateField('dob')
                  }}
                  error={teacherProps?.dob ? '' : errors.dob}
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

export default AddTeacher
