import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { getAllCourse } from '../../../../redux/course/api'
import DatePicker from 'react-datepicker'
// eslint-disable-next-line no-unused-vars

const AssignLesson = (): ReactElement => {
  const dispatch = useDispatch()

  const [values, setValues] = useState<any>()

  useEffect(() => {
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={'Assign Lesson'} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noPadding justifyContent="center">
          <DropdownWrapper width="16%">
            <EditableDropdown
              dropdownList={[]}
              placeholder={'Batch'}
              title="Batch"
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper width="16%">
            <EditableDropdown
              dropdownList={[]}
              title="Course"
              placeholder={'Course'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper width="16%">
            <EditableDropdown
              dropdownList={[]}
              title="Subject"
              placeholder={'Subject'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper width="16%">
            <EditableDropdown
              dropdownList={[]}
              title="Chapter"
              placeholder={'Chapter'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper width="16%">
            <DatePicker
              selected={values ? new Date(values) : new Date()}
              onSelect={(date: Date) => {
                setValues(date)
              }}
              onChange={(date: Date) => {
                setValues(date)
              }}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              customInput={
                <Input
                  value={values}
                  inputType="text"
                  label="Deadline"
                  placeholder={'Deadline'}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={() => {}}>Assign</ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AssignLesson
