import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
  ContainerWrapper,
  CustomeCalendar,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  Modal,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { getBranchDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { RootState } from '../../../../redux/store'
import { ButtonWrapper } from './subcomponents'
import events from './events'

const AddLeaveCalendar = (): ReactElement => {
  const dispatch = useDispatch()
  const { branchList, userInfo } = useSelector(
    (state: RootState) => ({
      branchList: state.branch.getBranchesList,
      userInfo: state.user.userInfo
    }),
    shallowEqual
  )
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [state, setState] = useState({ branch_id: '', branch_name: '' })

  const changeDate = (e: any) => {
    setDate(e.slots[0])
    setShow(true)
  }
  console.log(date)
  console.log(state)

  const branchDropdown = branchList ? getBranchDropDown(branchList) : []

  const {
    branch: { branchname },
    academicCalendar
  } = strings

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
        <SectionTitle title={academicCalendar.add_leave_calendar} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin justifyContent="space-between">
          <DropdownWrapper>
            <EditableDropdown
              placeholder={branchname}
              title="Select Branch"
              handleSelect={(item: DropdownListProps) => {
                setState({
                  branch_id: item.id,
                  branch_name: item.name
                })
              }}
              dropdownList={branchDropdown}
            />
          </DropdownWrapper>
          <ButtonWrapper>
            <ActionButton>Export</ActionButton>
            <ActionButton>Import</ActionButton>
          </ButtonWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="center">
          <CustomeCalendar
            onClick={(e: any) => changeDate(e)}
            events={events}
          />
        </FlexWrapper>

        {show ? (
          <Modal
            handleCancel={() => {
              setShow(false)
            }}
            handleSubmit={() => {
              setShow(false)
            }}
          >
            <FlexWrapper noMargin>
              <DropdownWrapper width="90%">
                <Input
                  value={''}
                  placeholder={'Holiday Name'}
                  label={'Holiday Name'}
                  isRequired
                  onChange={() => {}}
                />
              </DropdownWrapper>
            </FlexWrapper>
            <FlexWrapper noMargin>
              <DropdownWrapper width="90%">
                <Input
                  value={''}
                  inputType="textarea"
                  placeholder={'Description'}
                  label={'Description'}
                  isRequired
                  onChange={() => {}}
                />
              </DropdownWrapper>
            </FlexWrapper>
          </Modal>
        ) : null}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddLeaveCalendar
