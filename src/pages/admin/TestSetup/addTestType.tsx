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
import { addTestTypeHeader } from './const'

export const AddTestType = (): ReactElement => {
  const {
    testSetup: {
      addTestType: { title, addTestDescriptin, testType }
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
              placeholder={testType}
              label={testType}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={addTestDescriptin}
              label={addTestDescriptin}
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
                {addTestTypeHeader?.map((header, index) => (
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

export default AddTestType
