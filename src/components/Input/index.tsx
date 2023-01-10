import { ChangeEvent, ReactElement } from 'react'
import { InputProps } from './typings'
import { InputWrapper } from './subcomponents'
import { Label } from '../../typography'
import { FormControl } from 'react-bootstrap'

const Input = ({
  label,
  isRequired,
  value,
  width,
  isDisabled,
  inputType,
  error,
  name,
  accept,
  onBlur,
  placeholder = '',
  onChange,
  onClick,
  height
}: InputProps): ReactElement => {
  return (
    <InputWrapper width={width} isDisabled={isDisabled} height={height}>
      <Label htmlFor="edu-input">
        {label}
        {isRequired && <strong>*</strong>}
      </Label>
      {inputType === 'textarea' ? (
        <FormControl
          as="textarea"
          rows={3}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e.target.value)
          }
          onBlur={() => onBlur && onBlur()}
          placeholder={placeholder}
          onClick={onClick}
          autoComplete="off"
        />
      ) : (
        <FormControl
          id="edu-input"
          type={inputType || 'text'}
          name={name || ''}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e.target.value)
          }
          onBlur={() => onBlur && onBlur()}
          placeholder={placeholder}
          isValid={!error && !!value}
          isInvalid={!!error}
          accept={accept}
          onClick={onClick}
          autoComplete="off"
        />
      )}

      <FormControl.Feedback style={{ fontSize: '11px' }} type="invalid">
        {error}
      </FormControl.Feedback>
    </InputWrapper>
  )
}

export default Input
