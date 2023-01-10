import { ReactElement, useState } from 'react'
import {
  DropdownWrapper,
  FlexWrapper,
  Input,
  Loader,
  PageWrapper,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import DatePicker from 'react-datepicker'
import { Modal, Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { NewAssignementAction } from '../subcomponent'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import {
  GetCompletedAssignments,
  StudentGetAssignments
} from '../../../../redux/student/api'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  updateAssignmentDate,
  updateAssignmentDescription,
  updateAssignmentId,
  updateAssignmentPostedBy,
  updateAssignmentTitle
} from '../../../../redux/student/action'
import { PdfFrame } from '../../../teacher/Assignment/subcomponents'

const NewAssignment = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { userInfo, GetAssignment, isLoading, GetCompletedAssignment } =
    useSelector((state: RootState) => ({
      userInfo: state.user.userInfo,
      GetAssignment: state.student.GetAssignment,
      isLoading: state.student.isLoading,
      GetCompletedAssignment: state.student.GetCompletedAssignment
    }))
  const [value, setvalue] = useState('')
  const [show, setShow] = useState(false)
  const [pdf, setPdf] = useState('')
  const {
    student: {
      assignment: { date }
    }
  } = strings

  console.log(pdf)

  const results = GetAssignment.filter(
    ({ assignment_id: id1 }) =>
      !GetCompletedAssignment.some(({ assignment_id: id2 }) => id2 === id1)
  )

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <DropdownWrapper>
          <DatePicker
            selected={value ? new Date(value) : new Date()}
            onSelect={(date: Date) => {
              dispatch(
                StudentGetAssignments({
                  Institute_id: userInfo?.institute_id,
                  date: date ? format(date, DATE_FORMAT_YYYYMMDD) : '',
                  batch_id: userInfo?.batch_id,
                  branch_id: userInfo?.branch_id
                })
              )
              dispatch(
                GetCompletedAssignments({
                  Institute_id: userInfo?.institute_id,
                  date: date ? format(date, DATE_FORMAT_YYYYMMDD) : '',
                  batch_id: userInfo?.batch_id,
                  branch_id: userInfo?.branch_id,
                  student_id: userInfo?.user_id
                })
              )
            }}
            onChange={(date: Date) => {
              setvalue(date ? format(date, DATE_FORMAT_YYYYMMDD) : '')
            }}
            placeholderText={date}
            customInput={
              <Input
                value={value || ''}
                inputType="text"
                isRequired
                placeholder={date}
                label={date}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
      </FlexWrapper>
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
              {results.map((item, index) => (
                <TableRow key={index}>
                  <td>{index + 1}</td>
                  <td>{item.assignment_title}</td>
                  <td>{item.uploaded_date}</td>
                  <td>{item.assignment_deadline}</td>
                  <td>{item.posted_by}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={['fas', 'file']}
                      onClick={() => {
                        setPdf(
                          item?.attachment_type.toLowerCase() === 'pdf'
                            ? `${process.env.REACT_APP_PDF_BASEURL}${item.attachment}`
                            : item.attachment_type.toLowerCase() === 'pptx'
                            ? `${process.env.REACT_APP_PPTX_BASEURL}${item.attachment}`
                            : `${process.env.REACT_APP_IMAGE_BASEURL}${item.attachment}`
                        )
                        setShow(true)
                      }}
                    />
                  </td>
                  <td>
                    <NewAssignementAction
                      handleView={() => {
                        dispatch(updateAssignmentId(item.assignment_id))
                        dispatch(updateAssignmentTitle(item.assignment_title))
                        dispatch(
                          updateAssignmentDescription(item.assignment_desc)
                        )
                        dispatch(updateAssignmentPostedBy(item.posted_by))
                        dispatch(updateAssignmentDate(value))
                        history.push(ROUTES.VIEW_ASSIGNMENT)
                      }}
                    />
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
      <Modal
        show={show}
        onHide={() => {
          setShow(false)
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="iframe"
          src={`${pdf}#toolbar=0`}
          width="100%;"
          height="80%"
          allowFullScreen={true}
          loading="lazy"
          role={'dialog'}
          onContextMenu={() => false}
        />
      </Modal>
    </PageWrapper>
  )
}

export default NewAssignment
