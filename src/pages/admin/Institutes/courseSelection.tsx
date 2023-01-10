import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Label, Span } from '../../../typography'
import CourseCheckBox from './checkBox'
import {
  BootstrapModal,
  CourseSelect,
  CourseSelectionWrapper
} from './subcomponents'
import { CourseSelectionProps, CourseSelectOptions } from './typings'

const CourseSelection = ({
  onSelect,
  isEdit
}: CourseSelectionProps): ReactElement => {
  const { getCourseList } = useSelector((state: RootState) => ({
    getCourseList: state.course.getCourseList
  }))
  const [showModal, setShowModal] = useState(false)
  const [coursesList, setCoursesList] = useState<Array<CourseSelectOptions>>([])
  console.log(coursesList)

  const getCourseLists = (courses: any[]): Array<CourseSelectOptions> => {
    const matchingCourse = courses.map((course) => {
      return {
        id: course.course_id,
        name: course.Name,
        selected: false
      }
    })
    return [...matchingCourse]
  }

  useEffect(() => {
    const courseLists = getCourseLists(getCourseList)
    console.log('sdfgds', courseLists)

    const selectedCourses = getSelectedCourseList(coursesList)
    setCoursesList(courseLists)
    onSelect(selectedCourses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCourseList])

  useEffect(() => {
    if (!isEdit) {
      const courseList = getCourseList.map((course) => {
        return {
          id: course.course_id,
          name: course.Course_Name,
          selected: false
        }
      })
      setCoursesList(courseList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  const getSelectedCourseList = (coursesList: CourseSelectOptions[]) => {
    return coursesList
      .filter((course) => course.selected)
      .map((course) => ({
        courseId: course.id
      }))
  }

  return (
    <CourseSelectionWrapper>
      <Label htmlFor="edu-input">{'selectCourses'}</Label>
      <CourseSelect onClick={() => setShowModal(true)}>
        <Span>{'selectCourses'}</Span>
        <FontAwesomeIcon
          icon={['fas', 'chevron-down']}
          style={{ marginRight: 10, height: '100%', float: 'right' }}
        />
      </CourseSelect>
      {showModal && (
        <BootstrapModal
          handleCancel={() => {}}
          handleSubmit={() => {
            const selectedCourses = getSelectedCourseList(coursesList)
            onSelect(selectedCourses)
            setShowModal(false)
          }}
          title="Select Course"
        >
          <CourseCheckBox
            courses={coursesList}
            setCourses={(courses) => setCoursesList(courses)}
          />
        </BootstrapModal>
      )}
    </CourseSelectionWrapper>
  )
}

export default CourseSelection
