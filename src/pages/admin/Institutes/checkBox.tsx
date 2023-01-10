import { ReactElement } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {
  CheckBoxContainer,
  CourseCheckBoxWrapper,
  CourseName,
  SelectCheckBox
} from './subcomponents'
import { CourseCheckBoxProps, CourseSelectOptions } from './typings'

const CourseCheckBox = ({
  courses,
  setCourses
}: CourseCheckBoxProps): ReactElement => {
  return (
    <CheckBoxContainer>
      {courses.map(({ id, selected, name }: CourseSelectOptions, index) => {
        return (
          <CourseCheckBoxWrapper key={`course-index-${index}`}>
            <SelectCheckBox>
              <InputGroup.Checkbox
                checked={selected}
                onChange={() => {
                  setCourses(
                    courses.map((item) =>
                      item.id === id
                        ? {
                            ...item,
                            selected: !item.selected
                          }
                        : item
                    )
                  )
                }}
              />
            </SelectCheckBox>
            <CourseName id="course-name">{name}</CourseName>
          </CourseCheckBoxWrapper>
        )
      })}
    </CheckBoxContainer>
  )
}

export default CourseCheckBox
