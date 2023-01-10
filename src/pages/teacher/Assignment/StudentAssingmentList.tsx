import { ReactElement, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  Modal,
  SectionTitle
} from '../../../components'
import { RootState } from '../../../redux/store'
import {
  CardSubtitle,
  CardTitle,
  PageWrapper,
  BackButtonWrapper,
  SubtitleWrapper
} from '../../student/Learn/Chapter/subcomponents'
import { dropdown } from './const'
import {
  ColumnText,
  PdfFrame,
  ReviewButton,
  RowWrapper,
  StudentListWrapper,
  SubjectWrapper
} from './subcomponents'
import { StudentDetailsProps } from './Tabs/types'
import { ReviewAssignmentProps } from '../../../redux/student/types'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { StudentReviewAssignment } from '../../../redux/student/api'
import { Modal as ModalBootstarp } from 'react-bootstrap'

const StudentAssignmentList = (): ReactElement => {
  const {
    GetAssignment,
    branchName,
    assignmentBatchName,
    assignmentId,
    assignmentName,
    reviewAssignmentPaylaod
  } = useSelector((state: RootState) => ({
    GetAssignment: state.student.GetAssignment,
    branchName: state.student.branchName,
    assignmentBatchName: state.student.batchName,
    assignmentId: state.student.assignment_id,
    assignmentName: state.student.assignment_title,
    reviewAssignmentPaylaod: state.student
      .reviewAssignmentPaylaod as ReviewAssignmentProps
  }))

  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [state, setState] = useState({} as StudentDetailsProps)
  const [values, setvalues] = useState(reviewAssignmentPaylaod || {})
  const [shouldShow, setShouldShow] = useState('')
  const arr = GetAssignment.filter((item) => item.assignment_id == assignmentId)
  console.log(shouldShow)

  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <FlexWrapper noMargin noPadding hasBorder>
          <BackButtonWrapper>
            <SectionTitle title={''} hasBackButton />
          </BackButtonWrapper>
          <SubjectWrapper>
            <CardTitle>Review Assignment</CardTitle>
          </SubjectWrapper>
        </FlexWrapper>
        <RowWrapper>
          <Row>
            <Col xs={12} md={7}>
              <ColumnText>Branch: {branchName}</ColumnText>
            </Col>
            <Col xs={6} md={4}>
              <ColumnText>Assignment Id: {assignmentId}</ColumnText>
            </Col>
          </Row>
        </RowWrapper>
        <RowWrapper>
          <Row>
            <Col xs={12} md={7}>
              <ColumnText>Batch: {assignmentBatchName}</ColumnText>
            </Col>
            <Col xs={6} md={4}>
              <ColumnText>Assignment Name: {assignmentName}</ColumnText>
            </Col>
          </Row>
        </RowWrapper>
        <FlexWrapper noMargin noPadding hasBorder></FlexWrapper>
        <FlexWrapper noMargin hasBorder>
          <SubjectWrapper>
            <CardTitle>Student List</CardTitle>
          </SubjectWrapper>
        </FlexWrapper>
        <StudentListWrapper>
          {arr?.map((item) =>
            item.student_info.map((items, index) => {
              return (
                <FlexWrapper noMargin hasBorder key={index}>
                  <SubtitleWrapper>
                    <CardTitle onClick={() => {}} fontSize="18px">
                      {items.student_name}
                    </CardTitle>
                    <FlexWrapper noMargin noPadding>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                      >
                        Posted Date: {items.completed_date}
                      </CardSubtitle>
                    </FlexWrapper>
                    <FlexWrapper noMargin noPadding>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                      >
                        Comments : {items.comment}
                      </CardSubtitle>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '4%' }}
                      >
                        Review : {items.review}
                      </CardSubtitle>
                    </FlexWrapper>
                  </SubtitleWrapper>
                  {items.is_completed ? (
                    <ReviewButton disabled bg="red" onClick={() => {}}>
                      Reviewed
                    </ReviewButton>
                  ) : (
                    <ReviewButton
                      onClick={() => {
                        setShow(true)
                        setvalues({
                          ...values,
                          assignment_id: item?.assignment_id,
                          student_id: items?.student_id,
                          is_completed: true
                        })
                        setState({
                          ...state,
                          student_name: items.student_name,
                          attachment: items.attachment,
                          description: items.description,
                          attachment_type: items?.attachment_type.toLowerCase()
                        })
                      }}
                    >
                      Review
                    </ReviewButton>
                  )}
                </FlexWrapper>
              )
            })
          )}
        </StudentListWrapper>
      </ContainerWrapper>
      {show ? (
        <Modal
          handleCancel={() => {
            setShow(false)
          }}
          handleSubmit={() => {
            dispatch(StudentReviewAssignment(values))
            setShow(false)
          }}
          isLargeModal
        >
          <RowWrapper>
            <Row>
              <Col xs={12} md={7}>
                <ColumnText>Student Name: {state.student_name}</ColumnText>
              </Col>
              <Col xs={6} md={4}>
                <ColumnText>Assignment Id: {assignmentId}</ColumnText>
              </Col>
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <Col xs={12} md={7}>
                <ColumnText>Assignment Name: {assignmentName}</ColumnText>
              </Col>
            </Row>
          </RowWrapper>
          <FlexWrapper justifyContent="center">
            <DropdownWrapper width="90%">
              <Input
                value={state.description}
                inputType={'textarea'}
                label={'Description'}
                placeholder={'Description'}
                onChange={() => {}}
              />
            </DropdownWrapper>
          </FlexWrapper>
          <FlexWrapper noMargin noPadding justifyContent="space-around">
            <DropdownWrapper width="35%">
              <Button
                onClick={() => {
                  setShouldShow(
                    state?.attachment_type === 'pdf'
                      ? `${process.env.REACT_APP_PDF_BASEURL}${state.attachment}`
                      : state.attachment_type === 'pptx'
                      ? `${process.env.REACT_APP_PPTX_BASEURL}${state.attachment}`
                      : `${process.env.REACT_APP_IMAGE_BASEURL}${state.attachment}`
                  )
                }}
              >
                View Attachment
              </Button>
            </DropdownWrapper>
            <DropdownWrapper width="35%">
              <EditableDropdown
                dropdownList={dropdown}
                isRequired
                placeholder={'Review'}
                title={'Review'}
                handleSelect={(item: DropdownListProps) => {
                  setvalues({
                    ...values,
                    review: item.name
                  })
                }}
              />
            </DropdownWrapper>
          </FlexWrapper>
          <FlexWrapper justifyContent="center">
            <DropdownWrapper width="90%">
              <Input
                value={values?.comment || ''}
                inputType={'textarea'}
                label={'Comments'}
                placeholder={'Write your comments'}
                onChange={(value: string) => {
                  setvalues({
                    ...values,
                    comment: value
                  })
                }}
              />
            </DropdownWrapper>
          </FlexWrapper>
        </Modal>
      ) : null}
      <ModalBootstarp
        show={!!shouldShow}
        onHide={() => {
          setShouldShow('')
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <ModalBootstarp.Header closeButton>Pdf Viewer</ModalBootstarp.Header>
        <PdfFrame
          id="iframe"
          src={`${shouldShow}#toolbar=0`}
          width="100%;"
          height="80%"
          allowFullScreen={true}
          loading="lazy"
          role={'dialog'}
          onContextMenu={() => false}
        ></PdfFrame>
      </ModalBootstarp>
    </PageWrapper>
  )
}
export default StudentAssignmentList
