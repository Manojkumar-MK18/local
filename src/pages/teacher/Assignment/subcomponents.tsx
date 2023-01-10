import styled from 'styled-components'
import { Button, Tab, Tabs } from 'react-bootstrap'

export const TABS = styled(Tabs)`
  display: flex;
  justify-content: space-around;
  .nav-link {
    width: 300px;
    color: black;
    background-color: #ebeaec;
    font-weight: 400;
  }
  .nav-link.active {
    color: black;
    background-color: #ebeaec;
    border-bottom: 2px solid #55075b;
    font-weight: 600;
  }
`
export const TAB = styled(Tab)``

export const SubjectWrapper = styled.div`
  margin-left: 2%;
  margin-top: 16px;
  margin-bottom: 4px;
`
export const RowWrapper = styled.div`
  width: 90%;
  margin-left: 8%;
  padding-top: 2%;
`
export const ColumnText = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 0;
`
export const StudentListWrapper = styled.div`
  margin-left: 8%;
`

export const ReviewButton = styled(Button)`
  background-color: ${({ bg }) => (bg ? bg : '#50c878')} !important;
  border: none;
  font-size: 16px;
  height: 35px;
  margin-top: 2%;
  box-shadow: 1px 2px 5px grey;
`
export const PdfFrame = styled.iframe`
  height: 500px;
`
