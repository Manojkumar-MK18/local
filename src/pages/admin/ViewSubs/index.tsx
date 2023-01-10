import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../components'
import strings from '../../../locale/en'
import { tableHeader } from './const'

const ViewSubs = (): ReactElement => {
  const {
    course: { viewSubs }
  } = strings

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={viewSubs} />
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
                <td>course</td>
                <td>course</td>
                <td>course</td>
                <td>course</td>
                <td>course</td>
                <td>course</td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default ViewSubs
