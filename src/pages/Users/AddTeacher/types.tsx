import { addAdminProps } from '../../../redux/userRegistration/types'

export type FieldProps =
  | 'dob'
  | 'firstname'
  | 'lastname'
  | 'userName'
  | 'password'
  | 'mobile'

export interface ValidateAddTeacher {
  teacherProps: addAdminProps
  errors: Record<string, string>
  fields?: FieldProps
}
