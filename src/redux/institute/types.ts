export interface InstituteProps {
  institute_id: any
  address: string
  area: string
  city: string
  code: string
  contact_no: string
  country: string
  course_ids: any
  email: any
  branches: Array<any>
  expiry_date: any
  logo: any
  name: string
  nonteacher_limit: any
  pincode: string
  question_limit: string
  state: string
  status: any
  teacher_limit: string
  student_limit: string
  sdf?: any
}

export interface getInstitiuteProps {
  get_all: boolean
  institute_id: any
}

export interface getInstituteResponse {
  address: string
  area: string
  city: string
  contact_no: string
  course_ids: any
  email: string
  expiry_date: string
  institute_id: string
  logo: string
  name: string
  branches: Array<any>
  nonteacher_limit: string
  question_limit: string
  state: string
  status: string
  student_limit: string
  teacher_limit: string
}

export interface StudentAttendanceProp {
  attendance_id: string
  institute_id: string
  institute_name: string
  branch_id: string
  branch_name: string
  batch: [
    {
      batch_id: string
      batch_name: string
      attendance_list: Array<any>
    }
  ]
  username: string
  date: string
  subject: string
}

export interface GetStudentByBranch {
  institute_id?: string
  branch_id: string
  batch_id: string
}

export interface GetStudentByBranchResponse {
  father_name: string
  community: string
  created_by: string
  parent_mobile: string
  institute_id: string
  batch_id: string
  state: string
  city: string
  religion: string
  mobile: string
  mother_name: string
  from: string
  dob: string
  room_type: string
  firstname: string
  area_name: string
  branch_id: string
  nationality: string
  pincode: string
  transportation_id: string
  academic_year: string
  address: string
  gender: string
  caste: string
  lastname: string
  user_id: string
  hostel_id: string
  role: string
  aadhar_no: string
  year: string
  to: string
  remarks: string
  sats_no: string
  registration_type: string
}

export interface InitialState {
  isLoading: boolean
  addInstitutesPayload: InstituteProps | null | any
  getInstituteList: Array<getInstituteResponse>
  StudentAttendanceDate: any
  StudentByBranch: Array<GetStudentByBranchResponse>
}
