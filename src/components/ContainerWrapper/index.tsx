import styled from 'styled-components'

interface ContainerWrapperProps {
  noMargin?: boolean
  noPadding?: boolean
}

const ContainerWrapper = styled.div<ContainerWrapperProps>`
  box-sizing: border-box;
  box-shadow: 0 4px 99px 0 rgb(168 180 208 / 10%);
  background-color: #ffffff !important;
  border-radius: 0.3rem;
  margin: ${({ noMargin }) => (noMargin ? '0' : '20px 0')};
  padding: ${({ noPadding }) => (noPadding ? '0' : '20px 0')};
`
export default ContainerWrapper
