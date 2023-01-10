import { ReactElement, useState } from 'react'
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
import { Label } from '../../../../typography'
import { InputFileUploader } from './subcomponent'
import { CourseProps } from '../../../../redux/course/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { addCourses } from '../../../../redux/course/api'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'

const AddCourse = (): ReactElement => {
  const { addCoursePayload } = useSelector((state: RootState) => ({
    addCoursePayload: state.course.addCoursePayload as CourseProps
  }))

  const dispatch = useDispatch()
  const [values, setValues] = useState(addCoursePayload)
  const {
    course: {
      addCourse,
      courseIcon,
      courseId,
      des,
      combination,
      placeholder: { courseName }
    },
    button: { save }
  } = strings

  const canSubmit =
    !!values?.Course_Name && !!values?.Description && !!values?.course_id

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={addCourse} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input
              value={values?.course_id}
              isRequired
              label={courseId}
              placeholder={courseId}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  course_id: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.Course_Name}
              isRequired
              label={courseName}
              placeholder={courseName}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  Course_Name: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              isRequired
              placeholder={combination}
              title={combination}
              handleSelect={(item: DropdownListProps) =>
                setValues({
                  ...values,
                  combination: item?.name
                })
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.Description}
              isRequired
              label={des}
              placeholder={des}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  Description: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Label htmlFor="edu-input">{courseIcon}</Label>
            <InputFileUploader
              type="file"
              label={courseIcon}
              placeholder={courseIcon}
              onChange={(event: any) => {
                const { files } = event.target
                let reader = new FileReader()
                reader.readAsDataURL(files[0])
                reader.onload = () => {
                  setValues({
                    ...values,
                    Icon: reader.result
                  })
                }
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton
            disabled={!canSubmit}
            onClick={() => {
              dispatch(addCourses(values))
            }}
          >
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddCourse
