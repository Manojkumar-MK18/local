import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import fonts, { weight } from '../../const/fonts'
import { colors } from '../../const/theme'
import { Button } from 'react-bootstrap'

interface ImageWidthProps {
  isMenuOpen?: boolean
}

interface IconProps {
  left?: string
}

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  display: flex;
  border: 1px solid ${({ theme }) => theme?.border};
  background: ${colors.white};
  align-items: center;
  position: fixed;
  z-index: 1000;
  transition: 0.3s;
`

export const LogoContainer = styled.div`
  display: flex;
  width: 35%;
  float: left;
`

export const LogoWrapper = styled.div<ImageWidthProps>`
  text-align: center;
  transition: all 0.3s;
`

export const Wrapper = styled.div<ImageWidthProps>`
  border-right: 1px solid #e9edf4;
  text-align: center;
  padding: 17px 19px;
  width: ${({ isMenuOpen }) => (isMenuOpen ? '15.5rem' : '5rem')};
  transition: left 0.3s ease, width 0.45s ease;
  @media (max-width: 769px) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '11.5rem' : '50%')};
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: 50px;
  width: 75%;
  margin-top: auto;
  margin-bottom: 14px;
  object-fit: contain;
`

export const HamburgerMenu = styled(Button)`
  background: none;
  border: none;
  position: relative;
  left: 20px;
  font-size: ${fonts.medium}px;
  color: ${({ theme }) => theme?.hamburgerMenu};
  &:focus,
  &:active {
    background: none;
    box-shadow: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 8rem;
  float: right;
  margin-left: auto;
  align-items: center;
  position: relative;
  @media (min-width: 769px) {
    width: 8rem;
  }
`
export const ProfileWrapper = styled.div<IconProps>`
  position: relative;
  left: ${({ left }) => (left ? left : '0')};
  right: 0;
  margin: auto;
  margin-right: 30px;
`

export const IconWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid gray;
  padding: 8px 10px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1) translateY(-1px);
  }
`

export const IconsImage = styled(FontAwesomeIcon)`
  display: flex;
  cursor: pointer;
  color: gray;
  font-size: 15px;
`
export const IconsImageUser = styled(FontAwesomeIcon)`
  display: flex;
  cursor: pointer;
  color: gray;
  font-size: 15px;
`

export const ProfileData = styled.div`
  background-color: white;
  border: 0.5px solid #e9edf4;
  width: 10rem;
  padding: 20px;
  right: 0;
  position: absolute;
  z-index: 1000;
  margin-top: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &::before {
    content: '';
    width: 13px;
    height: 13px;
    background: white;
    border-left: 1px solid #e9edf4;
    border-top: 1px solid #e9edf4;
    position: absolute;
    left: 80%;
    top: -7px;
    transform: rotate(45deg);
  }
  h3 {
    font-size: ${fonts.large}px;
    font-weight: ${weight.bold};
    text-align: center;
    position: relative;
    text-transform: capitalize;
    z-index: 1000;
  }
  h4 {
    font-size: 13px;
    text-transform: capitalize;
    text-align: center;
  }
`

export const LogoutButton = styled.div`
  width: 100%;
  display: flex;
  padding: 7px 0;
  justify-content: center;
  letter-spacing: 0.02857em;
  border-top: 1px solid #e9edf4;
  border-bottom: 1px solid #e9edf4;
  border-radius: none;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: ${colors.black};
  }
`

export const LogoutIcon = styled(FontAwesomeIcon)`
  display: flex;
  padding-right: 7px;
  margin: auto 0;
  justify-content: center;
`

export const HamburgMenu = styled.div<ImageWidthProps>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 8.5%;
  margin-left: 10px;
  span {
    height: 3px;
    background: #635863;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.4s;
  }
  .line:nth-child(1) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '20px' : '22px')};
  }
  .line:nth-child(2) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '20px' : '13px')};
  }
  .line:nth-child(3) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '20px' : '22px')};
  }
`
