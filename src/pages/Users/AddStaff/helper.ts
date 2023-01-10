import {
  validatePhone,
  validateRequired
} from '../../../helpers/formValidation'
import { ValidateAddStaff } from './types'

const StaffValidation = ({
  values,
  errors,
  fields
}: ValidateAddStaff): Record<string, string> => {
  let formErrors: Record<string, string> = { ...errors }
  const { firstname, lastname, mobile, dob } = values
  switch (fields) {
    case 'firstname':
      formErrors['firstname'] = validateRequired(firstname)
      break
    case 'lastname':
      formErrors['lastname'] = validateRequired(lastname)
      break
    case 'mobile':
      formErrors['mobile'] = validatePhone(mobile)
      break
    case 'dob':
      formErrors['email'] = validateRequired(dob)
      break
    default:
      formErrors['firstname'] = validateRequired(firstname)
      formErrors['lastname'] = validateRequired(lastname)
      formErrors['mobile'] = validateRequired(mobile)
      formErrors['dob'] = validateRequired(dob)
  }
  return formErrors
}

export default StaffValidation
