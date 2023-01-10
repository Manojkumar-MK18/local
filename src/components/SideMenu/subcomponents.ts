import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fonts, { weight } from '../../const/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListProps } from './typings'
import { colors } from '../../const/theme'

interface MenuContainerProps {
  isChild?: boolean
  background?: string
}

export const MenuContainer = styled.ul<MenuContainerProps>`
  margin: 0;
  width: 17rem;
  position: relative;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  padding-left: ${({ isChild }) => (isChild ? '24px' : '0')};
  list-style: none;
  border-right: 0.1px solid ${({ theme }) => theme?.sideMenu.border};
  background-color: #fff;
  @media (max-width: 415px) {
    width: ${({ isChild }) => (isChild ? 'auto' : '')};
  }
`

export const Anchor = styled(Link)<ListProps>`
  width: 100%;
  padding: 16px 8px;
  text-decoration: none;
  font-size: ${({ font }) => (font ? `13.3px` : `${fonts.medium}px`)};
  color: ${({ $isSelected }) => ($isSelected ? '#6c5ffc' : '#282f53')};
  display: block;
  transition: 0.3s;
  font-family: 'Nunito', sans-serif;
  font-weight: ${weight.bold};
  &:hover {
    color: ${({ theme }) => theme?.sideMenu.anchor.hover};
  }
`

export const ListItem = styled.li<ListProps>`
  display: flex;
  color: ${({ $isSelected }) => ($isSelected ? '#6c5ffc' : '#282f53')};
  background: ${colors.white};
  cursor: pointer;
  text-decoration: ${({ $isChild, $isSelected }) =>
    $isChild && $isSelected ? 'underline' : 'none'};
`

export const MenuWrapper = styled.div`
  display: flex;
  padding: 4px 16px;
  height: 60px;
  width: 100%;
  align-items: center;
  &:hover {
    color: ${colors.purple};
    p {
      color: ${colors.purple};
    }
  }
`

export const MenuLogo = styled.img<ListProps>`
  margin: auto 12px;
  width: 15px;
  object-fit: contain;
  text-align: center;
  font-size: ${({ isMenuOpen }) => (isMenuOpen ? '13px' : '16px')};
  color: ${({ $isSelected }) => ($isSelected ? '#351038' : 'gray')};
`

export const FontIcon = styled(FontAwesomeIcon)<ListProps>`
  margin: auto 12px;
  text-align: center;
  font-size: ${({ isMenuOpen }) => (isMenuOpen ? '13px' : '16px')};
  color: ${({ $isSelected }) => ($isSelected ? '#351038' : 'gray')};
  &:hover {
    color: ${({ $isSelected }) => ($isSelected ? '#6c5ffc' : '#282f53')};
  }
`
export const ChevronIcon = styled(FontAwesomeIcon)<ListProps>`
  padding: 0;
  margin: auto;
  margin-right: 0;
  font-size: 9px;
`

export const MenuLable = styled.div<ListProps>`
  width: 100%;
  padding: 16px 8px;
  text-decoration: none;
  font-size: ${fonts.medium}px;
  color: ${({ $isSelected }) => ($isSelected ? '#6c5ffc' : '#282f53')};
  display: block;
  font-family: 'Nunito', sans-serif;
  transition: 0.3s;
  font-weight: ${weight.bold};
  &:hover {
    color: ${({ theme }) => theme?.sideMenu.anchor.hover};
  }
`
