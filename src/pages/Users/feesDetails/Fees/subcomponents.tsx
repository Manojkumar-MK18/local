import styled from 'styled-components'

export const TableData = styled.td`
  color: #55075b;
  text-align: center;
  width: 130px !important;
  padding-left: 8px !important;
`
interface Prosp {
  disColor?: boolean
}
export const TableInput = styled.input<Prosp>`
  width: 60%;
  padding: 3px;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  &:disabled {
    background-color: ${({ disColor }) => (disColor ? '' : 'white')};
    border: ${({ disColor }) => (disColor ? '' : '0.5px solid #a5a4a4')};
    color: ${({ disColor }) => (disColor ? '' : 'black')};
  }
`

export const TableWrapper = styled.div`
  margin-top: 12px;
  border: none;
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0;
  }
`

export const TableRow = styled.tr<Prosp>`
  vertical-align: baseline;
  .tableInput {
    width: 12%;
    text-align: center;
  }
  .tableLabel {
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
  }
`

export const HelperText = styled.div`
  position: relative;
  top: 30px;
`

const TableHeader = styled.thead`
  background-color: none;
  color: ${({ theme }) => theme.table.color};
  height: 35px;
  font-weight: 100;
`

export default TableHeader
