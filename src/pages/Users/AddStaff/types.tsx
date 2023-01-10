import { addAdminProps } from '../../../redux/userRegistration/types'

export type FieldProps =
  | 'dob'
  | 'firstname'
  | 'lastname'
  | 'userName'
  | 'password'
  | 'mobile'

export interface ValidateAddStaff {
  values: addAdminProps
  errors: Record<string, string>
  fields?: FieldProps
}
