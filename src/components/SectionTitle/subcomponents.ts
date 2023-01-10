import styled from 'styled-components'

interface TitleProps {
  hasBorder?: boolean
}

const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: ${({ hasBorder }) => (hasBorder ? '16px 0' : '0')};
  border-bottom: ${({ hasBorder, theme }) =>
    hasBorder ? `1px solid ${theme.border}` : '0'};
`

export default Title
