import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  Button,
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import { tableHeader } from './const'

const Subjects = (): ReactElement => {
  const {
    course: { subjectList, addSubject }
  } = strings
  const history = useHistory()

  return (
    <PageWrapper>
      <FlexWrapper justifyContent="space-between" noPadding>
        <SectionTitle title={subjectList} />
        <Button onClick={() => history.push(ROUTES.ADD_SUBJECT)}>
          {addSubject}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>Physics</td>
                <td>001</td>
                <td>Subject</td>
                <td>Des</td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Subjects
