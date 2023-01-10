import strings from '../locale/en'

export const hasFormError = (formErrors: Record<string, string>): boolean => {
  return !!Object.keys(formErrors).find((errorkey) => formErrors[errorkey])
}
const { validationMessages } = strings

export const validateRequired = (value: string): string => {
  const { required } = validationMessages.field

  if (!value) {
    return required
  } else {
    return ''
  }
}
export const validatePhone = (phone: string): string => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const { required, numberOnly, invalid } = validationMessages.phone
  if (!phone) {
    return required
  } else if (!phone.match(/^[0-9\b]+$/)) {
    return numberOnly
  } else if (!phone.match(phoneRegExp) || phone.length !== 10) {
    return invalid
  } else {
    return ''
  }
}
export const validatePasswordifFilled = (password: string) => {
  const passwordRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const { invalid } = validationMessages.password
  if (password) {
    if (!password?.match(passwordRegExp)) {
      return invalid
    } else {
      return ''
    }
  } else {
    return ''
  }
}
