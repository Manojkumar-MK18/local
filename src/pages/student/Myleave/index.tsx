import { ReactElement, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  CustomeCalendar,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../components'
import strings from '../../../locale/en'
import { getBatchByIds } from '../../../redux/batch/api'
import { RootState } from '../../../redux/store'
import events from '../../admin/Calendar/AddLeaveCalendar/events'
import { ColumnText, RowWrapper } from './subcomponents'

const StudentMyLeave = (): ReactElement => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state: RootState) => ({
    userInfo: state.user.userInfo
  }))
  const {
    student: { myLeaves }
  } = strings

  useEffect(() => {
    dispatch(
      getBatchByIds({
        Institute_id: userInfo?.institute_id,
        branch_id: userInfo?.branch_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={myLeaves.title}></SectionTitle>
      </FlexWrapper>
      <ContainerWrapper noMargin noPadding>
        <FlexWrapper noMargin noPadding hasBorder>
          <RowWrapper>
            <Row>
              <Col xs={6} md={4}>
                <ColumnText>
                  Student Name:
                  <span
                    style={{
                      fontWeight: 400,
                      marginLeft: '8px'
                    }}
                  >
                    {userInfo?.firstname} {userInfo?.lastname}
                  </span>
                </ColumnText>
              </Col>
              <Col xs={12} md={8}>
                <ColumnText>
                  Batch:
                  <span
                    style={{
                      fontWeight: 500,
                      marginLeft: '8px'
                    }}
                  >
                    {userInfo?.batch_name}
                  </span>
                </ColumnText>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <ColumnText>
                  Total Leave:
                  <span style={{ fontWeight: 400 }}> </span>
                </ColumnText>
              </Col>
            </Row>
          </RowWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="center">
          <CustomeCalendar onClick={() => {}} events={events} />
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default StudentMyLeave
