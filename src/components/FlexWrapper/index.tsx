import styled from 'styled-components'

interface FlexWrapperProps {
  noPadding?: boolean
  noMargin?: boolean
  justifyContent?: string
  height?: number
  hasBorder?: boolean
  paddingTop?: string
  width?: string
}

const FlexWrapper = styled.div<FlexWrapperProps>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '19px 19px')};
  width: ${({ width }) => (width ? width : null)};
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  margin: ${({ noMargin }) => (noMargin ? '0' : '12px 0')};
  ${({ hasBorder, theme }) =>
    hasBorder && `border-bottom: 1px solid ${theme.border}`}
`

export default FlexWrapper
