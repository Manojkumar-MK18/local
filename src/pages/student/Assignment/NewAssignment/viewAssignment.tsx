import { format } from 'date-fns'
import { ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
  Column,
  ContainerWrapper,
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import strings from '../../../../locale/en'
import { RootState } from '../../../../redux/store'
import { StudentPostAssignments } from '../../../../redux/student/api'
import { Label } from '../../../../typography'
import { AttachmentUploader, StyledTitle, Wrapper } from '../subcomponent'

const ViewAssignement = (): ReactElement => {
  const dispatch = useDispatch()
  const {
    userInfo,
    AssignmentDate,
    AssignmentTitle,
    AssignmentDesc,
    AssignmentPosted,
    AssignmentId
  } = useSelector((state: RootState) => ({
    userInfo: state.user.userInfo,
    AssignmentDate: state.student.assignment_date,
    AssignmentTitle: state.student.assignment_title,
    AssignmentDesc: state.student.assignment_desc,
    AssignmentPosted: state.student.assignment_posted_by,
    AssignmentId: state.student.assignment_id
  }))

  const [state, setState] = useState<any>({
    description: '',
    file: 'file',
    filetype: ''
  })

  const {
    student: {
      assignment: {
        viewAssignement,
        assignmentDescription,
        assignmentTitle,
        postedBy,
        postedDate,
        description,
        attachmentUpload
      }
    }
  } = strings

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={viewAssignement} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <StyledTitle>Assignment Details</StyledTitle>

        <FlexWrapper justifyContent="space-around" noMargin noPadding>
          <Wrapper>
            <Column keyName={assignmentTitle} value={AssignmentTitle} />
            <Column keyName={assignmentDescription} value={AssignmentDesc} />
          </Wrapper>
          <Wrapper>
            <Column keyName={postedBy} value={AssignmentPosted} />
            <Column keyName={postedDate} value={AssignmentDate} />
          </Wrapper>
        </FlexWrapper>
        <StyledTitle>Post Assignment</StyledTitle>
        <FlexWrapper noMargin>
          <DropdownWrapper width="40%">
            <Input
              value={state.description}
              label={description}
              inputType="textarea"
              onChange={(value: string) => {
                setState({ ...state, description: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper width="30%">
            <Label htmlFor="edu-input">Attachment</Label>
            <AttachmentUploader
              type="file"
              label={attachmentUpload}
              placeholder={attachmentUpload}
              onChange={(event: any) => {
                const { files } = event.target
                let extension = files[0].name.split('.').pop()
                let reader = new FileReader()
                reader.readAsDataURL(files[0])
                reader.onload = () => {
                  setState({
                    ...state,
                    file: reader.result,
                    filetype: extension
                  })
                }
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="center" noPadding>
          <ActionButton
            onClick={() => {
              dispatch(
                StudentPostAssignments({
                  assignment_id: AssignmentId,
                  student_id: userInfo?.user_id,
                  attachment: state.file,
                  attachment_type: state.filetype,
                  student_name: userInfo?.firstname,
                  completed_date: format(new Date(), DATE_FORMAT_YYYYMMDD),
                  description: state.description
                })
              )
            }}
          >
            Submit
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default ViewAssignement
