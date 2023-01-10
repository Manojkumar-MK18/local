import { ReactElement, useEffect, useState } from 'react'
import {
  ActionButton,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../../const/dateFormat'
import { leaveDropdown } from './const'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import strings from '../../../../locale/en'
import { getBranchDropDown } from '../../../../helpers/dropdown'
import { RootState } from '../../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchByInstitute } from '../../../../redux/branch/api'

const ApplyLeave = (): ReactElement => {
  const dispatch = useDispatch()
  const { branchList, userInfo } = useSelector((state: RootState) => ({
    branchList: state.branch.getBranchesList,
    userInfo: state.user.userInfo
  }))

  const branchDropdown = branchList ? getBranchDropDown(branchList) : []

  const {
    branch: { branchname },
    student: { myLeaves }
  } = strings

  const [values, setValues] = useState({
    from_date: '',
    to_date: '',
    leaveMethod: '',
    select_date: '',
    from_time: '',
    to_time: ''
  })
  useEffect(() => {
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={myLeaves.apply_leave} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <DropdownWrapper>
            <EditableDropdown
              isRequired
              dropdownList={branchDropdown}
              placeholder={branchname}
              title={'Select Branch'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={'Title'}
              label={'Title'}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={''}
              inputType="textarea"
              placeholder={'Description'}
              label={'Description'}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={leaveDropdown}
              placeholder={'Leave / Permission'}
              isRequired
              title={'Leave / Permission' || values.leaveMethod}
              handleSelect={(value: DropdownListProps) => {
                setValues({
                  ...values,
                  leaveMethod: value.name
                })
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin>
          {values.leaveMethod === 'Leave' ? (
            <>
              <DropdownWrapper>
                <DatePicker
                  selected={
                    values?.from_date ? new Date(values?.from_date) : new Date()
                  }
                  onSelect={(date: Date) =>
                    setValues({
                      ...values,
                      from_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  onChange={(date: Date) =>
                    setValues({
                      ...values,
                      from_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  placeholderText={''}
                  customInput={
                    <Input
                      value={values.from_date}
                      inputType="text"
                      isRequired
                      placeholder={''}
                      label={'From Date'}
                      suffix={['far', 'calendar']}
                    />
                  }
                />
              </DropdownWrapper>
              <DropdownWrapper>
                <DatePicker
                  selected={
                    values?.to_date ? new Date(values?.to_date) : new Date()
                  }
                  onSelect={(date: Date) =>
                    setValues({
                      ...values,
                      to_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  onChange={(date: Date) =>
                    setValues({
                      ...values,
                      to_date: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  placeholderText={''}
                  customInput={
                    <Input
                      value={values.to_date}
                      inputType="text"
                      isRequired
                      placeholder={''}
                      label={'To Date'}
                      suffix={['far', 'calendar']}
                    />
                  }
                />
              </DropdownWrapper>
            </>
          ) : null}
          {values.leaveMethod === 'Premission' ? (
            <>
              <DropdownWrapper>
                <DatePicker
                  selected={
                    values?.select_date
                      ? new Date(values?.select_date)
                      : new Date()
                  }
                  onSelect={(date: Date) =>
                    setValues({
                      ...values,
                      select_date: date
                        ? format(date, DATE_FORMAT_YYYYMMDD)
                        : ''
                    })
                  }
                  onChange={(date: Date) =>
                    setValues({
                      ...values,
                      select_date: date
                        ? format(date, DATE_FORMAT_YYYYMMDD)
                        : ''
                    })
                  }
                  placeholderText={''}
                  customInput={
                    <Input
                      value={values.select_date}
                      inputType="text"
                      isRequired
                      placeholder={''}
                      label={'Select Date'}
                      suffix={['far', 'calendar']}
                    />
                  }
                />
              </DropdownWrapper>
              <DropdownWrapper>
                <DatePicker
                  selected={
                    values?.from_time ? new Date(values?.from_time) : new Date()
                  }
                  onSelect={(date: Date) =>
                    setValues({
                      ...values,
                      from_time: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  onChange={(date: Date) =>
                    setValues({
                      ...values,
                      from_time: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  showTimeSelectOnly
                  showTimeSelect
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  popperPlacement="bottom"
                  placeholderText={''}
                  customInput={
                    <Input
                      value={values.from_time}
                      inputType="text"
                      isRequired
                      placeholder={''}
                      label={'Select Date'}
                      suffix={['far', 'clock']}
                    />
                  }
                />
              </DropdownWrapper>
              <DropdownWrapper>
                <DatePicker
                  selected={
                    values?.to_time ? new Date(values?.to_time) : new Date()
                  }
                  onSelect={(date: Date) =>
                    setValues({
                      ...values,
                      to_time: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  onChange={(date: Date) =>
                    setValues({
                      ...values,
                      to_time: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                    })
                  }
                  showTimeSelectOnly
                  showTimeSelect
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  popperPlacement="bottom"
                  placeholderText={''}
                  customInput={
                    <Input
                      value={values.to_time}
                      inputType="text"
                      isRequired
                      placeholder={''}
                      label={'Select Date'}
                      suffix={['far', 'clock']}
                    />
                  }
                />
              </DropdownWrapper>
            </>
          ) : null}
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              isRequired
              placeholder={'Types of Leave'}
              title={'Types of Leave'}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={() => {}}>Submit</ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default ApplyLeave
