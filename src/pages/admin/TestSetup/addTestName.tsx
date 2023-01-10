import { ReactElement, useState } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
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
import { RootState } from '../../../redux/store'
import { createTestName } from '../../../redux/test/api'
import { CreateTestNameProps } from '../../../redux/test/types'
import { addTestNameHeader } from './const'

const AddTestName = (): ReactElement => {
  const { createTestValues } = useSelector(
    (state: RootState) => ({
      createTestValues: state.test.createTestName as CreateTestNameProps
    }),
    shallowEqual
  )

  const [values, setValues] = useState(createTestValues)
  const dispatch = useDispatch()
  const {
    testSetup: {
      addTestName: { title, testDescription, testName }
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
              value={values.test_name}
              placeholder={testName}
              label={testName}
              isRequired
              onChange={(value: string) => {
                setValues({
                  ...values,
                  test_name: value
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.test_name_description}
              placeholder={testDescription}
              label={testDescription}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  test_name_description: value
                })
              }}
            />
          </DropdownWrapper>
          <Button
            onClick={() => {
              dispatch(
                createTestName({
                  ...values,
                  test_name_id: `${Math.round(Math.random() * 1000)}`
                })
              )
            }}
          >
            {submit}
          </Button>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {addTestNameHeader?.map((header, index) => (
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

export default AddTestName
