import { ReactElement } from 'react'
import SideMenu from '../../components/SideMenu'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { MenuWrapperProps, SideNavigationProps } from './typings'

const MenuWrapper = styled.div<MenuWrapperProps>`
  display: flex;
  @media (max-width: 769px) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '25%' : '0')};
  }
  @media (max-width: 415px) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '12rem' : '5rem')};
    position: absolute;
    height: 100%;
  }
  width: ${({ isMenuOpen }) => (isMenuOpen ? '15.5rem' : '5rem')};
  transition: left 0.3s ease, width 0.45s ease;
`

const SideNavigation = ({ menus }: SideNavigationProps): ReactElement => {
  const { isMenuOpen } = useSelector((state: RootState) => state.menu)

  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <SideMenu menus={menus} />
    </MenuWrapper>
  )
}

export default SideNavigation
