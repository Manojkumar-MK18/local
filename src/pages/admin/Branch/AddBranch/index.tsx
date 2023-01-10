import React, { useEffect, useState } from 'react'
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
import { statusDropdown } from '../../../../const/dropdown'
import strings from '../../../../locale/en'
import DatePicker from 'react-datepicker'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import {
  getCourseDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import { getSingleCourse } from '../../../../redux/course/api'
import { addBranchProps } from '../../../../redux/branch/types'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { addBranches } from '../../../../redux/branch/api'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../../const/routes'
import { InputFileUploader } from '../../Course/AddCourse/subcomponent'
import { Label } from '../../../../typography'

const AddBranch = () => {
  const { instituteList, courseList, addBranchesPayload } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      courseList: state.course.getCourseById,
      addBranchesPayload: state.branch.addBranchesPayload as addBranchProps
    }),
    shallowEqual
  )
  console.log(courseList)

  const dispatch = useDispatch()
  const history = useHistory()
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const courseDropdown = courseList ? getCourseDropDown(courseList) : []
  const [values, setValues] = useState(addBranchesPayload || {})
  const isEdit = history.location.pathname !== ROUTES.ADD_BRANCH
  const {
    institute: {
      email,
      address,
      area,
      state,
      city,
      constactNo,
      status,
      stuLimit,
      nonTecLimit,
      teachetLim,
      pincode
    },
    branch: {
      addBranch,
      branchId,
      branchname,
      logo,
      courseName,
      instituteId,
      expiDate,
      questionLimit,
      editBranch
    },
    button: { save }
  } = strings

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={isEdit ? editBranch : addBranch} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <DropdownWrapper>
            <EditableDropdown
              title={instituteId}
              placeholder={instituteId}
              isRequired
              dropdownList={instituteDropdown}
              handleSelect={(item: DropdownListProps) => {
                const courseIds = instituteList
                  ?.filter((dd) => dd?.institute_id === item?.id)
                  .map((dd) => dd?.course_ids)[0]
                dispatch(
                  getSingleCourse({
                    course_id: courseIds
                  })
                )
                setValues({
                  ...values,
                  institute_id: item?.id
                })
              }}
              defaultValue={{
                id: values?.institute_id,
                name: values?.institute_id
                  ? instituteDropdown?.filter(
                      (id) => id?.id === values?.institute_id
                    )[0]?.name
                  : ''
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.name || ''}
              placeholder={branchname}
              label={branchname}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  name: value
                })
              }}
            />
          </DropdownWrapper>
          {!isEdit && (
            <DropdownWrapper>
              <Input
                value={values?.branch_id || ''}
                placeholder={branchId}
                label={branchId}
                onChange={(value: string) => {
                  setValues({
                    ...values,
                    branch_id: value
                  })
                }}
              />
            </DropdownWrapper>
          )}
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
            <EditableDropdown
              title={courseName}
              placeholder={courseName}
              isRequired
              isMultiChoice
              dropdownList={courseDropdown}
              handleMultiSelect={(item) => {
                const ids = item.map((idss: DropdownListProps) => idss?.id)
                setValues({
                  ...values,
                  course_ids: ids
                })
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
              onChange={(value: string) => {
                setValues({
                  ...values,
                  nonteacher_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.question_limit || ''}
              placeholder={questionLimit}
              label={questionLimit}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  question_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              title={status}
              placeholder={status}
              isRequired
              defaultValue={statusDropdown[0]}
              dropdownList={statusDropdown}
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  status: item?.name
                })
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={() => dispatch(addBranches(values))}>
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddBranch
