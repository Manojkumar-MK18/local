import React, { ReactElement, useEffect, useState } from 'react'
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
import strings from '../../../../locale/en'
import DatePicker from 'react-datepicker'
import { statusDropdown } from '../../../../const/dropdown'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { addBatchProps } from '../../../../redux/batch/types'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { addBatches } from '../../../../redux/batch/api'
import {
  getBranchDropDown,
  getCourseDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { getSingleCourse } from '../../../../redux/course/api'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../../const/routes'

const AddBatch = (): ReactElement => {
  const { addBatchPayload, courseList, instituteList, branchList } =
    useSelector(
      (state: RootState) => ({
        addBatchPayload: state.batch.addBatchPayload as addBatchProps,
        instituteList: state.institute.getInstituteList,
        courseList: state.course.getCourseById,
        branchList: state.branch.getBranchesList
      }),
      shallowEqual
    )
  const dispatch = useDispatch()
  const history = useHistory()
  const instituteDropDown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const courseDropDown = courseList ? getCourseDropDown(courseList) : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const [values, setValues] = useState(addBatchPayload || {})
  const isEdit = history.location.pathname !== ROUTES.ADD_BATCH
  const {
    batch: {
      addBatch,
      instituteName,
      courseName,
      startDate,
      startTime,
      endTime,
      endDate,
      batchId,
      branch,
      batchName,
      editBatch
    },
    institute: { status, stuLimit },
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
        <SectionTitle title={isEdit ? editBatch : addBatch} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={instituteName}
              title={instituteName}
              dropdownList={instituteDropDown}
              isRequired
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  institute_id: item?.id
                })
                dispatch(
                  getBranchByInstitute({
                    Institute_id: item?.id
                  })
                )
              }}
              defaultValue={{
                id: values?.institute_id,
                name: values?.institute_id
                  ? instituteDropDown?.filter(
                      (id) => id?.id === values?.institute_id
                    )[0]?.name
                  : ''
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={branch}
              title={branch}
              isRequired
              dropdownList={branchDropdown}
              handleSelect={(item: DropdownListProps) => {
                const branchIds = branchList?.map(
                  (branc) =>
                    branc?.branches
                      ?.filter((dd) => dd?.branch_id === item?.id)
                      .map((dd) => dd?.course_ids)[0]
                )[0]
                dispatch(
                  getSingleCourse({
                    course_id: branchIds
                  })
                )
                setValues({
                  ...values,
                  branch_id: item?.id
                })
              }}
              defaultValue={{
                id: values?.branch_id,
                name: values?.branch_id
                  ? branchDropdown?.filter(
                      (id) => id?.id === values?.branch_id
                    )[0]?.name
                  : ''
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={courseName}
              title={courseName}
              isRequired
              dropdownList={courseDropDown}
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  course_ids: item?.id
                })
              }}
              defaultValue={{
                id: values?.course_ids,
                name: values?.course_ids
                  ? courseDropDown?.filter(
                      (id) => id?.id === values?.course_ids
                    )[0]?.name
                  : ''
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.name}
              placeholder={batchName}
              label={batchName}
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
                value={values?.id || ''}
                placeholder={batchId}
                label={batchId}
                onChange={(value: string) => {
                  setValues({
                    ...values,
                    id: value
                  })
                }}
              />
            </DropdownWrapper>
          )}
          <DropdownWrapper>
            <DatePicker
              selected={
                values?.start_date ? new Date(values?.start_date) : new Date()
              }
              onSelect={(date: Date) =>
                setValues({
                  ...values,
                  start_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              onChange={(date: Date) =>
                setValues({
                  ...values,
                  start_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              placeholderText={startDate}
              customInput={
                <Input
                  value={values?.start_date || ''}
                  inputType="text"
                  isRequired
                  placeholder={startDate}
                  label={startDate}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={
                values?.end_date ? new Date(values?.end_date) : new Date()
              }
              onSelect={(date: Date) =>
                setValues({
                  ...values,
                  end_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              onChange={(date: Date) =>
                setValues({
                  ...values,
                  end_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText={endDate}
              customInput={
                <Input
                  value={values?.end_date || ''}
                  inputType="text"
                  isRequired
                  placeholder={endDate}
                  label={endDate}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={values?.start_time}
              onSelect={(time: Date) =>
                setValues({
                  ...values,
                  start_time: time
                })
              }
              onChange={(time: Date) =>
                setValues({
                  ...values,
                  start_time: time
                })
              }
              placeholderText={startTime}
              showTimeSelectOnly
              showTimeSelect
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              popperPlacement="bottom"
              customInput={
                <Input
                  value={values?.start_time || ''}
                  inputType="text"
                  isRequired
                  placeholder={startTime}
                  label={startTime}
                  suffix={['far', 'clock']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={values?.end_time}
              onSelect={(date: Date) =>
                setValues({
                  ...values,
                  end_time: date
                })
              }
              onChange={(date: Date) =>
                setValues({
                  ...values,
                  end_time: date
                })
              }
              placeholderText={endTime || ''}
              showTimeSelectOnly
              showTimeSelect
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              popperPlacement="bottom"
              customInput={
                <Input
                  value={values?.end_time}
                  inputType="text"
                  isRequired
                  placeholder={endTime}
                  label={endTime}
                  suffix={['far', 'clock']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.student_limit || ''}
              placeholder={stuLimit}
              label={stuLimit}
              inputType="number"
              onChange={(value: string) => {
                setValues({
                  ...values,
                  student_limit: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={status}
              title={status}
              dropdownList={statusDropdown}
              defaultValue={statusDropdown[0]}
              isRequired
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  status: item?.id
                })
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="center" noMargin noPadding>
          <ActionButton onClick={() => dispatch(addBatches(values))}>
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddBatch
