import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Button,
  ContainerWrapper,
  FlexWrapper,
  Loader,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import { getAllCourse } from '../../../../redux/course/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'

const Course = (): ReactElement => {
  const { getCourseList, isLoading } = useSelector(
    (state: RootState) => ({
      getCourseList: state.course.getCourseList,
      isLoading: state.course.isLoading
    }),
    shallowEqual
  )
  const {
    course: { courseList, addCourse }
  } = strings

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper justifyContent="space-between" noPadding>
        <SectionTitle title={courseList} />
        <Button
          onClick={() => {
            history.push(ROUTES.ADD_COURSE)
          }}
        >
          {addCourse}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <TableWrapper>
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeader?.map((header, index) => (
                    <th key={`complete-session-header-${index}`}>{header}</th>
                  ))}
                </TableRow>
              </TableHeader>
              <tbody>
                {getCourseList?.map((list, index) => {
                  const { Course_Name, course_id, Description } = list
                  return (
                    <TableRow key={index}>
                      <td>{index + 1}</td>
                      <td>{course_id}</td>
                      <td>{Course_Name}</td>
                      <td></td>
                      <td>{Description}</td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Course
