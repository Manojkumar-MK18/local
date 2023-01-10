import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  CustomeCalendar,
  FlexWrapper,
  PageWrapper
} from '../../../components'
import ROUTES from '../../../const/routes'
import { updateStudentAttendanceDate } from '../../../redux/institute/action'

const TcStudentDateSelector = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <PageWrapper>
      <ContainerWrapper>
        <FlexWrapper justifyContent="center">
          <CustomeCalendar
            onClick={(e: any) => {
              history.push(ROUTES.TEACHER_LOGIN_STUDENT_ATTENDENCE)
              dispatch(updateStudentAttendanceDate(e?.slots[0]))
            }}
          />
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default TcStudentDateSelector
