import { Course } from '../../../redux/userRegistration/types'

export interface MultiValuesProps {
  course_id: string
  course_name: string
  is_fee_applicable: boolean
}

export interface FinalPayload {
  batch_id: string
  batch_name: string
  branch_id: string
  institute_id: string | any
  academic_year: string
  year: string
  gender: string
  dob: string
  father_name: string
  mother_name: string
  parent_mobile: string
  aadhar_no: string
  address: string
  area_name: string
  city: string
  pincode: string
  state: string
  nationality: string
  religion: string
  caste: string
  community: string
  course?: Array<Course>
  registration_type: string
  hostel_id: string
  room_type: string
  transportation_id: string
  from: string
  to: string
  user_role: 'STUDENT'
  sats_no: string
  status: string | any
}

export type FinalPayloadField =
  | 'batch_id'
  | 'branch_id'
  | 'institute_id'
  | 'father_name'
  | 'mother_name'
  | 'parent_mobile'
  | 'aadhar_no'
  | 'address'
  | 'area_name'
  | 'sats_no'
  | 'registration_type'
  | 'community'
  | 'caste'
  | 'religion'
  | 'nationality'
  | 'state'
  | 'pincode'
  | 'city'

export type InitialField =
  | 'first_name'
  | 'last_name'
  | 'mobile'
  | 'userName'
  | 'dob'

export interface AddInitialField {
  user_role: 'STUDENT'
  first_name: string
  last_name: string
  mobile: number | any
  userName: string
  password: string
  dob: string | any
}

export interface ValidateAddInitialField {
  values: AddInitialField
  errors: Record<string, string>
  field?: InitialField
}

export interface ValidateStudentAdmission {
  values: FinalPayload
  errors: Record<string, string>
  field?: FinalPayloadField
}

export const CourseInitialValue: MultiValuesProps = {
  course_id: '',
  course_name: '',
  is_fee_applicable: false
}
