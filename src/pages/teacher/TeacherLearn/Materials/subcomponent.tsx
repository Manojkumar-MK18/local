import { Figure, Tabs } from 'react-bootstrap'
import styled from 'styled-components'
import { Tab } from 'react-bootstrap'

export const SubjectIcon = styled(Figure)`
  width: 56px;
`
export const TABS = styled(Tabs)`
  display: flex;
  padding-left: 5%;
  .nav-link {
    border: 0px solid transparent;
    width: 200px;
    color: #7a7a7a;
  }
  .nav-link.active {
    border-bottom: solid 2px #55075b !important;
    color: black;
    font-weight: 600;
  }
`
export const TAB = styled(Tab)``

export const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 7px 0 100px;
`
export const VideoPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: auto;
`
