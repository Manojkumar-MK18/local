import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type InputType = 'text' | 'dropdown'

export interface InputProps {
  label?: string
  isRequired?: boolean
  value: string | any
  width?: string
  isDisabled?: boolean
  inputType?: 'text' | 'file' | 'number' | 'textarea' | 'email' | 'time'
  placeholder?: string
  accept?: string
  error?: string
  name?: string
  //eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
  onBlur?: () => void
  onClick?: () => void
  suffix?: IconProp
  hasPadding?: boolean
  height?: string
}

export interface InputWrapperProps {
  width?: string
  isDisabled?: boolean
  hasPadding?: boolean
  height?: string
}
