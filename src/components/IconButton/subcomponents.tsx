import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { colors } from '../../const/theme'

export const IconWrapper = styled.div`
  margin: 16px 24px;
  width: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 415px) {
    margin: 24px 0;
    width: 120px;
    height: 120px;
  }
`

interface IconProps {
  $isAnimationAllowed: boolean
}

export const Icon = styled(Button)<IconProps>`
  margin: 12px 0;
  border-color: ${colors.white};
  color: ${colors.black};
  text-transform: capitalize;
  &:hover,
  &:focus {
    border-color: ${colors.white};
    background: ${colors.white};
    color: ${colors.black};
    transform: ${($isAnimationAllowed) =>
      $isAnimationAllowed ? 'scale(1.1)' : 'none'};
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ChapterIconButton = styled(Button)`
  margin: 12px 0;
  border: none;
  color: ${colors.black};
  text-transform: capitalize;
  background: none;
  transition: all 0.2s;
  &:hover,
  &:active,
  &:focus {
    background: none;
    transition: transform 0.2s;
    box-shadow: none;
    border: none;
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`
export const ChapterImage = styled.img`
  width: 100%;
  height: 100%;
`
