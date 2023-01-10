import { format } from 'date-fns'
import { ReactElement, useEffect, useState } from 'react'
import {
  ActionButton,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  ToastMessage
} from '../../../../components'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import DatePicker from 'react-datepicker'
import { Label } from '../../../../typography'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import {
  getTeacherBatchDropDown,
  getTeacherBranchDropDown
} from '../../../../helpers/dropdown'
import { AttachmentUploader } from './subcomponents'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getBatchByIds } from '../../../../redux/batch/api'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { TeacherPostAssignmentProsp } from '../../../../redux/teacherAssignment/types'
import { teacherPostAssingment } from '../../../../redux/teacherAssignment/api'
import { getTeacherInsDetails } from '../../../../redux/teacherLeave/api'
import { updateIsAssignmentPosted } from '../../../../redux/teacherAssignment/action'

const PostAssignment = (): ReactElement => {
  const { teacherDetailsList, userInfo, postAssignmentPayload, isPosted } =
    useSelector(
      (state: RootState) => ({
        teacherDetailsList: state.teacherLeave.getTeacherDetails,
        userInfo: state.user.userInfo,
        postAssignmentPayload: state.teacherAssignment
          .postAssignmentPayload as TeacherPostAssignmentProsp,
        isPosted: state.teacherAssignment.isPosted
      }),
      shallowEqual
    )

  const dispatch = useDispatch()
  const branchDropdown = teacherDetailsList
    ? getTeacherBranchDropDown(teacherDetailsList)
    : []
  const batchDropdown = teacherDetailsList
    ? getTeacherBatchDropDown(teacherDetailsList)
    : []
  const [values, setValues] = useState(postAssignmentPayload || {})

  useEffect(() => {
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    dispatch(
      getTeacherInsDetails({
        Institute_id: userInfo?.institute_id,
        user_id: userInfo?.user_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <ToastMessage
        show={isPosted}
        message={'Assignment Posted Successfully'}
        onCloseHandler={() => {
          dispatch(updateIsAssignmentPosted(false))
        }}
        bg="success"
      />
      <FlexWrapper justifyContent="space-around" noPadding>
        <DropdownWrapper width="25%">
          <EditableDropdown
            dropdownList={branchDropdown}
            isRequired
            placeholder={'Select Branch'}
            title={'Select Branch'}
            handleSelect={(value: DropdownListProps) => {
              dispatch(
                getBatchByIds({
                  Institute_id: userInfo?.institute_id,
                  branch_id: value.id
                })
              )
              setValues({
                ...values,
                posted_by: userInfo?.firstname,
                institute_id: userInfo?.institute_id,
                branch_id: value?.id,
                branch_name: value.name,
                assignment_id: `${Math.round(Math.random() * 500)}`,
                uploaded_date: format(new Date(), DATE_FORMAT_YYYYMMDD)
              })
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper width="25%">
          <EditableDropdown
            dropdownList={batchDropdown}
            isRequired
            placeholder={'Select Batch'}
            title={'Select Batch'}
            handleSelect={(value: DropdownListProps) => {
              setValues({
                ...values,
                batch_id: value?.id,
                batch_name: value.name
              })
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper width="25%">
          <Input
            value={values?.assignment_title}
            isRequired
            label={'Title'}
            placeholder={'Title'}
            onChange={(value: string) => {
              setValues({
                ...values,
                assignment_title: value
              })
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>

      <FlexWrapper justifyContent="space-around" noPadding>
        <DropdownWrapper width="25%">
          <Input
            value={values?.assignment_desc}
            inputType={'textarea'}
            label={'Description'}
            placeholder={'Description'}
            onChange={(value: string) => {
              setValues({
                ...values,
                assignment_desc: value
              })
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper width="25%">
          <DatePicker
            selected={
              values?.assignment_deadline
                ? new Date(values?.assignment_deadline)
                : new Date()
            }
            onSelect={(date: Date) =>
              setValues({
                ...values,
                assignment_deadline: date
                  ? format(date, DATE_FORMAT_YYYYMMDD)
                  : ''
              })
            }
            onChange={(date: Date) =>
              setValues({
                ...values,
                assignment_deadline: date
                  ? format(date, DATE_FORMAT_YYYYMMDD)
                  : ''
              })
            }
            placeholderText={'Dead line'}
            customInput={
              <Input
                value={values?.assignment_deadline || ''}
                inputType="text"
                isRequired
                placeholder={'Dead line'}
                label={'Dead line'}
                suffix={['far', 'calendar']}
              />
            }
          />
        </DropdownWrapper>
        <DropdownWrapper width="25%">
          <Label htmlFor="edu-input">Attachment</Label>
          <AttachmentUploader
            type="file"
            label={'Attachment'}
            placeholder={'Upload Attachment'}
            onChange={(event: any) => {
              const { files } = event.target
              let extension = files[0].name.split('.').pop()
              let reader = new FileReader()
              reader.readAsDataURL(files[0])
              reader.onload = () => {
                setValues({
                  ...values,
                  attachment: reader.result,
                  attachment_type: extension
                })
              }
            }}
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <ActionButton
          onClick={() => {
            dispatch(teacherPostAssingment(values))
          }}
        >
          Submit
        </ActionButton>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default PostAssignment
