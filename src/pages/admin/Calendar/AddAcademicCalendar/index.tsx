import { ReactElement, useEffect, useState } from 'react'
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
import {
  getBranchDropDown,
  getCourseDropDown
} from '../../../../helpers/dropdown'
import { RootState } from '../../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getAllCourse } from '../../../../redux/course/api'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { format } from 'date-fns'

const AddAcademicCalendar = (): ReactElement => {
  const dispatch = useDispatch()
  const { branchList, userInfo, courseList } = useSelector(
    (state: RootState) => ({
      branchList: state.branch.getBranchesList,
      userInfo: state.user.userInfo,
      courseList: state.course.getCourseList
    })
  )

  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const courseDropdown = courseList ? getCourseDropDown(courseList) : []

  const [values, setValues] = useState({ session_date: '' })

  const {
    branch: { branchname },
    menu: { admin },
    batch: { courseName },
    academicCalendar
  } = strings

  useEffect(() => {
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={academicCalendar.add_academic_calendar} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              isRequired
              dropdownList={branchDropdown}
              placeholder={branchname}
              title={admin.selectBranch}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={courseDropdown}
              placeholder={courseName}
              title={admin.selectCourse}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              placeholder={admin.selectSubject}
              title={admin.selectSubject}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              placeholder={admin.selectChapter}
              title={admin.selectChapter}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              isRequired
              placeholder={'Select Session'}
              title={'Select Session'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={
                values?.session_date
                  ? new Date(values?.session_date)
                  : new Date()
              }
              onSelect={(date: Date) =>
                setValues({
                  ...values,
                  session_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              onChange={(date: Date) =>
                setValues({
                  ...values,
                  session_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                })
              }
              placeholderText={''}
              customInput={
                <Input
                  value={values.session_date}
                  inputType="text"
                  isRequired
                  placeholder={''}
                  label={'Select Date'}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={() => {}}>Submit</ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddAcademicCalendar
