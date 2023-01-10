import styled from 'styled-components'

interface DropdownWrapperProps {
  width?: string
  marginTop?: string
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  margin: 0 12px 0;
  width: ${({ width }) => width || '22%'};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '')};
  @media (max-width: 415px) {
    width: 100%;
    margin: 8px;
  }

  #editable-dropdown {
    height: 100%;
  }
`

export default DropdownWrapper
