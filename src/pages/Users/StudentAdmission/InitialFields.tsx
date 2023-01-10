import { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import InitialfieldValidation from './helpers'
import { AddInitialField, InitialField } from './typings'
import {
  hasFormError,
  validatePasswordifFilled
} from '../../../helpers/formValidation'
import {
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import { cognitoPoolData } from '../../../services'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { updateStudent } from '../../../redux/userRegistration/action'

const InitialFields = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    users: { studentadmission },
    button: { save }
  } = strings

  const [values, setValues] = useState<AddInitialField>({} as AddInitialField)
  const [passVal, setpassVal] = useState<any>('')
  const [errors, setErrors] = useState({} as Record<string, string>)

  const ValidateField = (field: InitialField): void => {
    setErrors(InitialfieldValidation({ values, errors, field }))
  }
  //cognito Functions
  const userNumGen = Math.round(Math.random() * 100)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersFinder = Math.round(Math.random() * characters.length)
  const userName = `${values?.first_name}${userNumGen}${characters[
    charactersFinder
  ]?.toUpperCase()}`
  const DOB = moment(values?.dob).format('DD-MM-YYYY').replace(/-/g, '')

  const userPool = new CognitoUserPool(cognitoPoolData)

  const handleRegisterCognitoSubmit = (e: any) => {
    const ValidationError = InitialfieldValidation({
      values,
      errors
    })
    if (hasFormError(ValidationError)) {
      setErrors(ValidationError)
    } else {
      e.preventDefault()
      const attributeList = []

      const dataRole = {
        Name: 'custom:custom:role',
        Value: 'STUDENT'
      }
      const dataFirstName = {
        Name: 'name',
        Value: values.first_name
      }
      const dataMobileNo = {
        Name: 'phone_number',
        Value: `+91${values.mobile}`
      }
      const dataDOB = {
        Name: 'birthdate',
        Value: moment(values?.dob).format('DD-MM-YYYY')
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
      history.push(ROUTES.STUDENT_ADMISSION)
    }
  }

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={studentadmission} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input
              value={'STUDENT'}
              placeholder={'Role'}
              label={'Role'}
              isDisabled
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.first_name}
              placeholder={'First Name'}
              label={'First Name'}
              isRequired
              onBlur={() => {
                ValidateField('first_name')
              }}
              onChange={(value: string) => {
                setValues({ ...values, first_name: value })
              }}
              error={errors.first_name}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.last_name}
              placeholder={'Last Name'}
              label={'Last Name'}
              isRequired
              onBlur={() => {
                ValidateField('last_name')
              }}
              onChange={(value: string) => {
                setValues({ ...values, last_name: value })
              }}
              error={errors.last_name}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.mobile}
              placeholder={'Mobile Number'}
              label={'Mobile Number'}
              isRequired
              onBlur={() => {
                ValidateField('mobile')
              }}
              onChange={(value: string) => {
                setValues({ ...values, mobile: value })
              }}
              error={errors.mobile}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.userName}
              placeholder={'UserName'}
              label={'UserName'}
              onChange={(value: string) => {
                setValues({ ...values, userName: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.password}
              placeholder={'Password'}
              onBlur={() => {
                const error = validatePasswordifFilled(values?.password)
                setpassVal(error)
              }}
              error={passVal}
              label={'Password'}
              onChange={(value: string) => {
                setValues({ ...values, password: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={values.dob ? new Date(values?.dob) : new Date()}
              onSelect={(date: Date) => {
                setValues({
                  ...values,
                  dob: date
                })
              }}
              onChange={(date: Date) => {
                setValues({
                  ...values,
                  dob: date
                })
              }}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText={'Date of birth'}
              customInput={
                <Input
                  value={values?.dob}
                  inputType="text"
                  isRequired
                  onBlur={() => {
                    ValidateField('dob')
                  }}
                  error={values?.dob ? '' : errors.dob}
                  placeholder={'Date of birth'}
                  label={'Date of birth'}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton
            onClick={(e: any) => {
              handleRegisterCognitoSubmit(e)
              dispatch(
                updateStudent({
                  fName: values?.first_name,
                  lName: values?.last_name,
                  mob: values?.mobile,
                  dob: values?.dob,
                  userName: values?.userName ? values?.userName : userName,
                  pass: values?.password ? values?.password : DOB
                })
              )
            }}
          >
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default InitialFields
