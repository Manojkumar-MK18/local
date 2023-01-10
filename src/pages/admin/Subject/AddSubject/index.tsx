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
import { getCourseDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { addSubjects, getAllCourse } from '../../../../redux/course/api'
import { SubjectProps } from '../../../../redux/course/types'
import { RootState } from '../../../../redux/store'
import { Label } from '../../../../typography'
import { InputFileUploader } from '../../../admin/Course/AddCourse/subcomponent'
import { initialValues } from './const'

const AddSubject = (): ReactElement => {
  const { getCourseList } = useSelector(
    (state: RootState) => ({
      getCourseList: state.course.getCourseList
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const [values, setValues] = useState(initialValues as SubjectProps)
  const {
    course: {
      addSubject,
      selectCourse,
      subjectIcon,
      subjectId,
      subjectName,
      subDes
    },
    button: { save }
  } = strings

  const courseDropDowm = getCourseList ? getCourseDropDown(getCourseList) : []

  useEffect(() => {
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={addSubject} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={selectCourse}
              title={selectCourse}
              isRequired
              dropdownList={courseDropDowm}
              handleSelect={(value: DropdownListProps) => {
                setValues({
                  ...values,
                  course_id: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.id}
              placeholder={subjectId}
              label={subjectId}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  id: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values?.name}
              isRequired
              placeholder={subjectName}
              label={subjectName}
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
              value={values?.description}
              isRequired
              placeholder={subDes}
              label={subDes}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  description: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Label htmlFor="edu-input">{subjectIcon}</Label>
            <InputFileUploader
              type="file"
              label={subjectIcon}
              placeholder={subjectIcon}
              onChange={(event: any) => {
                const { files } = event.target
                console.log(files[0])
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
            onClick={() => {
              dispatch(
                addSubjects({
                  course_id: values?.course_id,
                  Subjects: [
                    {
                      id: values?.id,
                      Icon: values?.Icon,
                      name: values?.name,
                      description: values?.description
                    }
                  ]
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

export default AddSubject
