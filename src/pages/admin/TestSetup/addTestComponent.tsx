import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import {
  Button,
  ContainerWrapper,
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../components'
import strings from '../../../locale/en'
import { addTestComponentHeader } from './const'

const AddTestComponent = (): ReactElement => {
  const {
    testSetup: {
      addTestComponent: { title, componentDescription, componentName }
    },
    button: { submit }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={componentName}
              label={componentName}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>{' '}
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={componentDescription}
              label={componentDescription}
              onChange={() => {}}
            />
          </DropdownWrapper>
          <Button>{submit}</Button>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {' '}
                {addTestComponentHeader?.map((header, index) => (
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

export default AddTestComponent
