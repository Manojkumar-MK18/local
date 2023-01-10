import { ReactElement, useState } from 'react'
import menuItems from '../../const/menus'
import {
  MenuContainer,
  ListItem,
  Anchor,
  MenuWrapper,
  FontIcon,
  ChevronIcon,
  MenuLogo,
  MenuLable
} from './subcomponents'
import { Menu } from '../../container/SideNavigation/typings'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { updateIsMenuOpen } from '../../redux/menu/actions'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { RootState } from '../../redux/store'

interface SideMenuProps {
  menus?: Array<Menu>
}

const SideMenu = ({
  menus = menuItems.student
}: SideMenuProps): ReactElement => {
  const { isMenuOpen } = useSelector(
    (state: RootState) => ({
      isMenuOpen: state.menu.isMenuOpen
    }),
    shallowEqual
  )
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [selectedChild, setSelectedChild] = useState(-1)
  const [childMenuOpen, setchildMenuOpen] = useState(false)

  const dispatch = useDispatch()
  return (
    <MenuContainer>
      {menus.map((menu, index) => {
        const { childs = [] } = menu
        const isSelected = selectedMenu === index
        return (
          <>
            <ListItem
              key={`menu-${index}`}
              $isSelected={isSelected}
              onClick={() => {
                setSelectedMenu(selectedMenu >= 0 ? index : -1)
                setchildMenuOpen(!childMenuOpen)
                if (!isMenuOpen) {
                  dispatch(updateIsMenuOpen(true))
                }
                setSelectedChild(0)
              }}
            >
              <MenuWrapper>
                {typeof menu?.icon === 'string' ? (
                  <MenuLogo src={menu?.icon} alt="menu" />
                ) : (
                  <FontIcon
                    icon={menu?.icon}
                    size="sm"
                    $isSelected={isSelected}
                    isMenuOpen={isMenuOpen}
                  />
                )}
                {menu?.childs && menu.childs.length && isMenuOpen ? (
                  <>
                    <MenuLable $isSelected={isSelected}>
                      {menu?.label}
                    </MenuLable>
                    <ChevronIcon
                      icon={[
                        'fas',
                        selectedMenu === index && childMenuOpen
                          ? 'chevron-down'
                          : 'chevron-right'
                      ]}
                      size="sm"
                    />
                  </>
                ) : (
                  <Anchor to={menu?.to} $isSelected={isSelected}>
                    {isMenuOpen && menu?.label}
                  </Anchor>
                )}
              </MenuWrapper>
            </ListItem>
            {selectedMenu === index && isMenuOpen && childMenuOpen && (
              <MenuContainer isChild key={`subMenu-${index}`}>
                {childs.map((child, index) => (
                  <ListItem
                    $isChild
                    key={`child-${index}`}
                    onClick={() => {
                      setSelectedChild(index)
                    }}
                    $isSelected={selectedChild === index}
                  >
                    <FontIcon
                      style={{ fontSize: '12px' }}
                      $isSelected={selectedChild === index}
                      icon={child?.icon as IconProp}
                      size="sm"
                    />
                    <Anchor
                      $isSelected={selectedChild === index}
                      font
                      to={child?.to}
                    >
                      {child?.label}
                    </Anchor>
                  </ListItem>
                ))}
              </MenuContainer>
            )}
          </>
        )
      })}
    </MenuContainer>
  )
}

export default SideMenu
