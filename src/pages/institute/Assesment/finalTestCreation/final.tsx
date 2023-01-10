import { ReactElement } from 'react'
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
import strings from '../../../../locale/en'
import DatePicker from 'react-datepicker'

const FinalTestCreation = (): ReactElement => {
  const {
    instituteAdmin: {
      assesment: { createTest, selectData, selectTime }
    },
    batch: { batchName, branch }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={createTest} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={branch}
              dropdownList={[]}
              handleSelect={() => {}}
              title={branch}
              isRequired
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={batchName}
              dropdownList={[]}
              handleSelect={() => {}}
              title={batchName}
              isRequired
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={new Date()}
              onSelect={() => {}}
              onChange={() => {}}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText={selectData}
              customInput={
                <Input
                  value={''}
                  inputType="text"
                  isRequired
                  placeholder={selectData}
                  label={selectData}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              selected={new Date()}
              onSelect={() => {}}
              onChange={() => {}}
              placeholderText={selectTime}
              showTimeSelectOnly
              showTimeSelect
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              popperPlacement="bottom"
              customInput={
                <Input
                  value={''}
                  inputType="text"
                  isRequired
                  placeholder={selectTime}
                  label={selectTime}
                  suffix={['far', 'clock']}
                />
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton>Submit</ActionButton>
          <ActionButton variant="outline-secondary">Cancel</ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default FinalTestCreation
