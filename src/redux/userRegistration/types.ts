import {
  academicYearList,
  bloodGroup,
  casteList,
  categoryList,
  contractType,
  genderList,
  paymentModes,
  registrationType,
  yearList
} from './const'

export type OnChangeHandler = {
  [key: string]: any
}

export interface Dropdown {
  id: string
  name: string
}

export type DropdownList = Array<Dropdown>

export interface Course {
  course_id: string
  is_fee_applicable: Boolean
  term?: any
}

export interface UpdateStudent {
  fName: string
  lName: string
  mob: string
  dob: string
  userName: string
  pass: string
}

export interface getTransportHostelProsp {
  Institute_id: string
  branch_id: string
}

export interface Desgination {
  designation: string
}

export interface getDepartmentResponse {
  department_id: string
  department_name: string
  designations: Array<Desgination>
}

export interface getUsersProps {
  institute_id: string
  user_role: string
}

export interface StudentAdmissionTypes {
  batch_id: string
  batch_name: string
  branch_id: string
  institute_id: string
  mobile?: number | any
  lastname?: string | any
  firstname?: string | any
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
  course: Array<Course>
  user_id: string
  registration_type: string
  hostel_id: string
  room_type: string
  transportation_id: string
  from: string
  to: string
  user_role: 'STUDENT'
  remarks: string
  sats_no: string
  dob?: string | any
  status: string
  created_by: string
  userName: string
  password: string
}

export interface courseTypes {
  course_id: any
  course_name: any
  is_fee_applicable: any
}

export interface feesTypes {
  bank: string
  consession_amount: string
  fee_balance: string
  fee_paid_amount: any
  fee_paid_date: string
  fee_type: string
  fees_paid_id: string
  fine_amount: string
  invoice_number: string
  mode_of_payment: string
  ref_no: string
  user_id: string
}

export interface addAdminProps {
  user_role: string
  dob?: string | any
  userName?: string | any
  password?: string | any
  mobile?: number | any
  lastname?: string | any
  firstname?: string | any
  user_id?: any
  fathername?: string | any
  branch_id?: string | any
  institute_id?: string | any
  email?: string | any
  batch_name?: string | any
  fees_paid?: Array<feesTypes>
  gender?: string | any
  address?: string | any
  status?: string | any
  area_name?: string | any
  city?: string | any
  pincode?: string | any
  completion_year?: string | any
  state?: string | any
  designation?: string | any
  department?: string | any
  blood_group?: string | any
  spouse_name?: string | any
  collage_name?: string | any
  collage_cityname?: string | any
  previous_institutename?: string | any
  expericence?: string | any
  bank_name?: string | any
  emergency_connumber?: string | any
  educational_background?: string | any
  emergnecy_contact_person?: string | any
  bank_account_no?: string | any
  bank_ifsc?: string | any
  bank_branch?: string | any
  PAN_number?: string | any
  date_of_joining?: string | any
  PF_account_number?: string | any
  EPS_account_number?: string | any
  passport_no?: string | any
  country_of_issue?: string | any
  passport_expiry?: string | any
  contract_type?: string | any
  contract_start_date?: string | any
  year?: string | any
  academic_year?: string | any
  course?: Array<courseTypes>
  profile_pictute?: string | any
}

interface InitialState {
  isLoggedIn: boolean
  isLoading: boolean
  error: string
  acdemicList: DropdownList
  yearList: DropdownList
  genderList: DropdownList
  communityList: DropdownList
  paymentList: DropdownList
  castList: DropdownList
  registrationList: DropdownList
  contractList: DropdownList
  bloodList: DropdownList
  addTeacher: addAdminProps
  addNewStaffDetails: addAdminProps
  getDepartmentLists: Array<getDepartmentResponse>
  studentpdate: UpdateStudent
  getAdminLists: Array<addAdminProps>
}

export const initialState: InitialState = {
  isLoggedIn: false,
  isLoading: false,
  error: '',
  acdemicList: academicYearList,
  yearList: yearList,
  genderList: genderList,
  communityList: categoryList,
  castList: casteList,
  registrationList: registrationType,
  bloodList: bloodGroup,
  contractList: contractType,
  addTeacher: {
    user_role: 'TEACHER'
  },
  addNewStaffDetails: {
    user_role: 'STAFF'
  },
  getDepartmentLists: [],
  studentpdate: {
    fName: '',
    lName: '',
    dob: '',
    userName: '',
    pass: '',
    mob: ''
  },
  getAdminLists: [],
  paymentList: paymentModes
}
