import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  CustomeCalendar,
  FlexWrapper,
  PageWrapper
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import { updateStudentAttendanceDate } from '../../../../redux/institute/action'

const TeacherDateSelector = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <PageWrapper>
      <ContainerWrapper>
        <FlexWrapper justifyContent="center">
          <CustomeCalendar
            onClick={(e: any) => {
              history.push(ROUTES.TEACHER_ATTENDENCE)
              dispatch(updateStudentAttendanceDate(e))
            }}
          />
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default TeacherDateSelector
