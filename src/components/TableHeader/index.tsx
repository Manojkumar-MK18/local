import styled from 'styled-components'

interface TableProsp {
  noBorder?: boolean
}

export const TableWrapper = styled.div`
  margin-top: 8px;
  --bs-gutter-x: 0;
  padding: 12px;
  width: 100%;
  > * table {
    margin-bottom: 0;
  }
`
export const TableRow = styled.tr<TableProsp>`
  vertical-align: baseline;
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #e9edf4')};
`

const TableHeader = styled.thead`
  background-color: transparent;
  color: #2e3138;
  height: 35px;
`

export default TableHeader
