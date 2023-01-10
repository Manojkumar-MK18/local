import styled from 'styled-components'
import { weight } from '../../const/fonts'
import { InputWrapperProps } from './typings'

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  height: ${({ height }) => (height ? height : '85px')};
  margin-bottom: ${({ hasPadding }) => (hasPadding ? '12px' : '0')};
  #edu-input {
    border: 1px solid #e9edf4;
    ::placeholder {
      color: rgb(105, 109, 112);
      font-size: 14px;
      font-weight: 400;
    }
  }
  @media (max-width: 415px) {
    width: 100%;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
pointer-events: none;
opacity: 0.7;
`}

  .form-control:focus {
    border-color: ${({ theme: { input } }) => input.focus};
    box-shadow: none;
  }

  .is-valid {
    border-color: ${({ theme: { dropDown } }) => dropDown.success} !important;
    box-shadow: none;
  }
  .is-invalid {
    border-color: ${({ theme: { dropDown } }) => dropDown.error} !important;
    box-shadow: none;
  }
`

export const InputLabel = styled.label`
  font-weight: ${weight.bold};
`
