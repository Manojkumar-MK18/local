import { ReactElement, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import strings from '../../../../locale/en'
import { addInstitutesApi } from '../../../../redux/institute/api'
import { InstituteProps } from '../../../../redux/institute/types'
import { RootState } from '../../../../redux/store'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { getCourseDropDown } from '../../../../helpers/dropdown'
import { getAllCourse } from '../../../../redux/course/api'
import { statusDropdown } from './const'
import ROUTES from '../../../../const/routes'
import { useHistory } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import CourseSelection from '../courseSelection'
import { Label } from '../../../../typography'
import { InputFileUploader } from '../../../admin/Course/AddCourse/subcomponent'

const AddInstitutes = (): ReactElement => {
  const { addInstitutes, getCourseList } = useSelector(
    (state: RootState) => ({
      addInstitutes: state.institute.addInstitutesPayload as InstituteProps,
      getCourseList: state.course.getCourseList
    }),
    shallowEqual
  )

  const [values, setValues] = useState(addInstitutes || {})
  const dispatch = useDispatch()
  const history = useHistory()
  const courseDropDowm = getCourseList ? getCourseDropDown(getCourseList) : []
  const isEdit = history.location.pathname !== ROUTES.ADD_INSTITUTE

  console.log(addInstitutes)

  const {
    institute: {
      addInstitute,
      instituteId,
      name,
      address,
      area,
      city,
      code,
      constactNo,
      country,
      courseName,
      email,
      expiDate,
      logo,
      state,
      status,
      stuLimit,
      teachetLim,
      nonTecLimit,
      pincode,
      editInstitue
    },
    button: { save }
  } = strings

  useEffect(() => {
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle
          title={isEdit ? editInstitue : addInstitute}
          hasBackButton
        />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          {!isEdit && (
            <DropdownWrapper>
              <Input
                value={values?.institute_id || ''}
                placeholder={instituteId}
                label={instituteId}
                isRequired
                onChange={(value: string) => {
                  setValues({
                    ...values,
                    institute_id: value
                  })
                }}
              />
            </DropdownWrapper>
          )}
          <DropdownWrapper>
            <Input
              value={values?.name || ''}
              placeholder={name}
              label={name}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  name: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.code || ''}
              placeholder={code}
              isRequired
              label={code}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  code: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Label htmlFor="edu-input">{logo}</Label>
            <InputFileUploader
              placeholder={logo}
              type="file"
              label={logo}
              onChange={(event: any) => {
                const { files } = event.target
                let reader = new FileReader()
                reader.readAsDataURL(files[0])
                reader.onload = () => {
                  setValues({
                    ...values,
                    logo: reader.result
                  })
                }
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.contact_no || ''}
              placeholder={constactNo}
              label={constactNo}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  contact_no: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.email || ''}
              isRequired
              placeholder={email}
              label={email}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  email: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.address || ''}
              placeholder={address}
              label={address}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  address: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.area || ''}
              placeholder={area}
              label={area}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  area: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.city || ''}
              placeholder={city}
              label={city}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  city: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.state || ''}
              placeholder={state}
              label={state}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  state: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.country || ''}
              placeholder={country}
              label={country}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  country: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.pincode || ''}
              placeholder={pincode}
              label={pincode}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  pincode: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={courseName}
              title={courseName}
              dropdownList={courseDropDowm}
              isRequired
              isMultiChoice
              handleMultiSelect={(item) => {
                const ids = item.map((idss: DropdownListProps) => idss?.id)
                setValues({
                  ...values,
                  course_ids: ids
                })
              }}
              defaultValue={{
                id: values?.course_ids,
                name: values?.course_ids
                  ? courseDropDowm?.filter(
                      (id) => id?.id === values?.course_ids
                    )[0]?.name
                  : ''
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={
                values?.expiry_date ? new Date(values?.expiry_date) : new Date()
              }
              onSelect={(date: Date) =>
                setValues({
                  ...values,
                  expiry_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              onChange={(date: Date) =>
                setValues({
                  ...values,
                  expiry_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText={expiDate}
              customInput={
                <Input
                  value={values?.expiry_date || ''}
                  inputType="text"
                  isRequired
                  placeholder={expiDate}
                  label={expiDate}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.student_limit || ''}
              placeholder={stuLimit}
              label={stuLimit}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  student_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.teacher_limit || ''}
              placeholder={teachetLim}
              label={teachetLim}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  teacher_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.nonteacher_limit || ''}
              placeholder={nonTecLimit}
              label={nonTecLimit}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  nonteacher_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={statusDropdown || ''}
              placeholder={status}
              title={status}
              defaultValue={statusDropdown[0]}
              handleSelect={(value: DropdownListProps) => {
                setValues({
                  ...values,
                  status: value.name
                })
              }}
            />
          </DropdownWrapper>
          {/* <CourseSelection
            isEdit={isEdit}
            onSelect={(course_ids: Array<any>) => {
              setValues({ ...values, course_ids: course_ids })
            }}
          /> */}
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={() => dispatch(addInstitutesApi(values))}>
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddInstitutes
