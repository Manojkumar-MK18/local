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
import strings from '../../../../locale/en'
import DatePicker from 'react-datepicker'
import { Table } from 'react-bootstrap'
import { tableHeaders } from './const'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { GetCompletedAssignments } from '../../../../redux/student/api'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { StyledReview } from '../subcomponent'

const CompleteAssingement = (): ReactElement => {
  const dispatch = useDispatch()
  const { userInfo, GetCompletedAssignment, isLoading } = useSelector(
    (state: RootState) => ({
      userInfo: state.user.userInfo,
      GetCompletedAssignment: state.student.GetCompletedAssignment,
      isLoading: state.student.isLoading
    })
  )

  const [value, setvalue] = useState('')
  const {
    student: {
      assignment: { date }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <DropdownWrapper>
          <DatePicker
            selected={value ? new Date(value) : new Date()}
            onSelect={(date: Date) =>
              dispatch(
                GetCompletedAssignments({
                  Institute_id: userInfo?.institute_id,
                  date: date ? format(date, DATE_FORMAT_YYYYMMDD) : '',
                  batch_id: userInfo?.batch_id,
                  branch_id: userInfo?.branch_id,
                  student_id: userInfo?.user_id
                })
              )
            }
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
                {tableHeaders?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {GetCompletedAssignment.map((item, index) => (
                <TableRow key={index}>
                  <td>{index + 1}</td>
                  <td>{item.assignment_title}</td>
                  <td>{item.posted_by}</td>
                  <td>{item.completed_date}</td>
                  {item.review === 'Bad' ? (
                    <td>
                      <StyledReview style={{ background: '#fd8585' }}>
                        {item.review}
                      </StyledReview>
                    </td>
                  ) : item.review === 'Good' ? (
                    <td>
                      <StyledReview style={{ background: '#70e270' }}>
                        {item.review}
                      </StyledReview>
                    </td>
                  ) : item.review === 'Not Bad' ? (
                    <td>
                      <StyledReview style={{ background: 'orange' }}>
                        {item.review}
                      </StyledReview>
                    </td>
                  ) : (
                    <td></td>
                  )}

                  <td>{item.comment}</td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </PageWrapper>
  )
}

export default CompleteAssingement
