export interface CourseInfo {
  course_id: string
  course_name: string
  is_fee_applicable: boolean
}

export interface UserInfo {
  address: string
  blood_group: string
  email: string
  fathername: string
  firstname: string
  institute_id: string
  lastname: string
  user_id: string
  user_role: string
  aadhar_no: string
  academic_year: string
  area_name: string
  batch_id: string
  batch_name: string
  branch_id: string
  caste: string
  city: string
  community: string
  course: Array<CourseInfo>
  created_by: string
  dob: string
  father_name: string
  gender: string
  hostel_id: string
  mobile: string
  mother_name: string
  nationality: string
  parent_mobile: string
  pincode: string
  registration_type: string
  religion: string
  remarks: string
  room_type: string
  sats_no: string
  state: string
  status: 'ACTIVE'
  transportation_id: string
  year: string
}

// Define a type for the slice state
interface UserState {
  isLoggedIn: boolean
  isLoading: boolean
  userName: string
  password: string
  device: string
  userInfo: UserInfo | null
  hasError: boolean
}

// Define the initial state using that type
export const initialState: UserState = {
  isLoggedIn: false,
  isLoading: false,
  userName: '',
  password: '',
  device: '',
  hasError: false,
  userInfo: null
}

export interface AuthenticatePayload {
  loginDevice: 'mobile' | 'website'
}

export interface LoginPayload {
  username: string
  password: string
}
