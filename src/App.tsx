import React, { useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Header } from './components'
import theme from './const/theme'
import SideNavigation from './container/SideNavigation'
import { Router } from 'react-router-dom'
import history from './const/history'
import Routes from './routes'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import BREAKPOINTS from './const/breakpoint'
import useBreakpoint from 'use-breakpoint'
import { updateIsMenuOpen } from './redux/menu/actions'
import determineMenu from './helpers/determineMenu'
import { weight } from './const/fonts'

interface BodyProps {
  isShowOverlay?: boolean
  marginTop?: boolean
}

const Body = styled.div<BodyProps>`
  display: flex;
  margin-top: ${({ marginTop }) => (marginTop ? '70px' : null)};
  min-height: calc(100vh - 40px);
  overflow: none;
  background: #f0f0f5 !important;
  @media (max-width: 500px) {
    margin: 0;
  }
`

interface GlobalStylesProps {
  isMobileMenuOpen: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Nunito', sans-serif;
    overflow: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'hidden' : 'auto'};  
  }
  #container {
    z-index: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '-1' : '0')};
  }  
  .react-datepicker-popper {
    z-index: 999;
    padding: 0 !important;
  }
  th{
  text-align: center;
  font-size: 14px;
  font-weight: ${weight.medium};
  }
  td{
    text-align: center;
    font-weight: ${weight.normal};
    font-size: .900rem;  
  }
  .table thead>tr>th,.table tbody>tr>th,.table tfoot>tr>th,.table thead>tr>td,.table tbody>tr>td,.table tfoot>tr>td{
    line-height: 1.25; 
    padding: 13px 4px;
    border  :none ;
} 
.react-calendar button {
    margin: 0;
    outline: none;
    border: 0.5px solid #69296F;
}
.react-calendar__month-view__weekdays__weekday{
  margin-top: -16px;
  border: 0.5px solid #69296F;
  padding: 2%;
}
.react-calendar__navigation button {
  background-color: #69296F;
  color: white;
}
.react-calendar__tile{
  padding: 3%;
}     
`

const App = () => {
  const {
    isLoggedIn,
    isMenuOpen,
    // eslint-disable-next-line no-unused-vars
    role = ''
  } = useSelector(
    (state: RootState) => ({
      isLoggedIn: state.user.isLoggedIn,
      isMenuOpen: state.menu.isMenuOpen,
      role: state.user.userInfo?.user_role
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const isMobileMenuOpen = isMenuOpen && breakpoint === 'mobile'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [breakpoint])
  console.log('isLoggedIn', isLoggedIn)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isMobileMenuOpen={isMobileMenuOpen} />
      {isLoggedIn && <Header />}
      <Body
        marginTop={isLoggedIn}
        onClick={() => {
          setTimeout(() => {
            if (isMobileMenuOpen) {
              dispatch(updateIsMenuOpen(false))
            }
          }, 500)
        }}
      >
        <Router history={history}> 
          {isLoggedIn && <SideNavigation menus={determineMenu('SUPERADMIN')} />}
          <Routes />
        </Router>
      </Body>
    </ThemeProvider>
  )
}

export default App
