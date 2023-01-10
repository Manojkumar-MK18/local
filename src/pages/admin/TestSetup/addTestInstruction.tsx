import React, { ReactElement } from 'react'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from '../../../components'
import strings from '../../../locale/en'

const AddTestInstruction = (): ReactElement => {
  const {
    testSetup: {
      testInstruction: { title, selsctTestName, testName, duration }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              placeholder={selsctTestName}
              title={testName}
              isRequired
              handleSelect={() => {}}
            />
          </DropdownWrapper>{' '}
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={duration}
              label={duration}
              isRequired
            />{' '}
          </DropdownWrapper>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddTestInstruction
