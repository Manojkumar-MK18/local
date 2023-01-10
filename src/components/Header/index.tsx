import { ReactElement, useState } from 'react'
import {
  HamburgerMenu,
  HeaderWrapper,
  Logo,
  LogoContainer,
  LogoutButton,
  LogoutIcon,
  LogoWrapper,
  ProfileContainer,
  ProfileData,
  IconsImage,
  ProfileWrapper,
  IconWrapper,
  HamburgMenu,
  IconsImageUser,
  Wrapper
} from './subcomponent'
import Logos from '../../assets/FELogo.png'
import Logos1 from '../../assets/FELogo1.png'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { updateIsMenuOpen } from '../../redux/menu/actions'
import { RootState } from '../../redux/store'
import { updateIsLoggedIn } from '../../redux/userDetails/actions'

const Header = (): ReactElement => {
  const {
    menu: { isMenuOpen },
    userInfo
  } = useSelector(
    (state: RootState) => ({
      menu: state.menu,
      userInfo: state.user.userInfo
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const [show, setshow] = useState(false)

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Wrapper isMenuOpen={isMenuOpen}>
          <LogoWrapper>
            <Logo src={isMenuOpen ? Logos : Logos1} />
          </LogoWrapper>
        </Wrapper>
        <HamburgerMenu
          variant="transparent"
          onClick={() => dispatch(updateIsMenuOpen(!isMenuOpen))}
        >
          <HamburgMenu isMenuOpen={isMenuOpen}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </HamburgMenu>
        </HamburgerMenu>
      </LogoContainer>
      <ProfileContainer>
        <IconWrapper>
          <IconsImage icon={['far', 'bell']} size="1x" />
        </IconWrapper>
        <ProfileWrapper>
          <IconWrapper
            onClick={() => {
              setshow(!show)
            }}
          >
            <IconsImageUser icon={['far', 'user']} size="2x" />
          </IconWrapper>
          {show && (
            <ProfileData>
              <h3>{`${userInfo?.firstname}${userInfo?.lastname}`}</h3>
              <h4>{userInfo?.user_role?.toLowerCase()}</h4>
              <LogoutButton onClick={() => dispatch(updateIsLoggedIn(false))}>
                <LogoutIcon icon={['fas', 'arrow-right-from-bracket']} />
                {'Logout'}
              </LogoutButton>
            </ProfileData>
          )}
        </ProfileWrapper>
      </ProfileContainer>
    </HeaderWrapper>
  )
}

export default Header
