import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, useState } from 'react'
import { Table } from 'react-bootstrap'
import {
  ActionButton,
  Button,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Icon,
  Input,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import strings from '../../../../locale/en'
import { tableHeader } from './const'
import { FormCheck } from './subcomponent'
import { MoreComponentProsp } from './types'

const MarkSetting = (): ReactElement => {
  const [moreComponentValues, setMoreComponentValues] = useState<
    Array<MoreComponentProsp>
  >([])
  const [formValues, setFormValues] = useState({} as MoreComponentProsp)
  const [moreComponents, setMoreComponents] = useState({
    yes: false,
    no: true
  })

  const {
    testSetup: {
      markSetting: {
        title,
        selectComponent,
        selectTestType,
        selecttestName,
        paperName,
        moreComponent
      },
      addTestName: { testName },
      addTestComponent: { componentName },
      addTestType: { testType }
    },
    button: { add, submit }
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
              placeholder={selecttestName}
              title={testName}
              dropdownList={[]}
              isRequired
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={selectTestType}
              title={testType}
              dropdownList={[]}
              isRequired
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={selectComponent}
              title={componentName}
              dropdownList={[]}
              isRequired
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            {' '}
            <Input
              value={''}
              label={paperName}
              placeholder={paperName}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <Button>{add}</Button>
        </FlexWrapper>
        <FlexWrapper noMargin>
          {moreComponent}
          <FormCheck
            name="YES"
            label="Yes"
            checked={moreComponents.yes}
            onClick={() => {
              setMoreComponents({
                ...moreComponents,
                yes: true,
                no: false
              })
            }}
          />
          <FormCheck
            name="NO"
            label="No"
            checked={moreComponents?.no}
            onClick={() => {
              setMoreComponents({
                ...moreComponents,
                yes: false,
                no: true
              })
            }}
          />
        </FlexWrapper>
        {moreComponents.yes && (
          <>
            {moreComponentValues?.map((ele, i) => (
              <FlexWrapper noMargin key={i} height={50}>
                <DropdownWrapper>
                  <Input value={ele?.componentName} />
                </DropdownWrapper>
                <DropdownWrapper>
                  <Input value={ele?.paperName} />
                </DropdownWrapper>
                <DropdownWrapper>
                  <Icon
                    onClick={() => {
                      const value = [...moreComponentValues]
                      value.splice(i, 1)
                      setMoreComponentValues(value)
                    }}
                  >
                    <FontAwesomeIcon icon={['far', 'trash-alt']} size="1x" />
                  </Icon>
                </DropdownWrapper>
              </FlexWrapper>
            ))}
            <FlexWrapper noMargin>
              <DropdownWrapper>
                <EditableDropdown
                  placeholder={selectComponent}
                  title={componentName}
                  dropdownList={[]}
                  isRequired
                  handleSelect={(value: DropdownListProps) => {
                    setFormValues({
                      ...formValues,
                      componentName: value?.name
                    })
                  }}
                />
              </DropdownWrapper>
              <DropdownWrapper>
                {' '}
                <Input
                  value={formValues?.paperName}
                  label={paperName}
                  placeholder={paperName}
                  isRequired
                  onChange={(value: string) => {
                    setFormValues({
                      ...formValues,
                      paperName: value
                    })
                  }}
                />
              </DropdownWrapper>
              <Icon
                onClick={() => {
                  setMoreComponentValues([
                    ...moreComponentValues,
                    { ...formValues }
                  ])
                  setFormValues({
                    ...formValues,
                    paperName: '',
                    componentName: ''
                  })
                }}
              >
                <FontAwesomeIcon icon={['fas', 'plus']} size="1x" />{' '}
              </Icon>
            </FlexWrapper>
            <FlexWrapper noMargin noPadding justifyContent="center">
              <ActionButton>{submit}</ActionButton>
              <ActionButton variant="outline-secondary">{'Clear'}</ActionButton>
            </FlexWrapper>
          </>
        )}
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {' '}
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow></TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default MarkSetting
