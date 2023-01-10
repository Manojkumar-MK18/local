export interface addBranchProps {
  institute_id: string
  address: string
  area: string
  city: string
  contact_no: string
  course_ids: any
  email: string
  batch: []
  expiry_date: any
  branch_id: string
  logo: any
  name: string
  nonteacher_limit: string
  pincode: string
  question_limit: string
  state: string
  status: string
  student_limit: string
  teacher_limit: string
}

export interface BranchTypes {
  branch_id: string
  name: string
  address: string
  area: string
  batch: string
  city: string
  contact_no: string
  course_ids: string
  email: string
  expiry_date: string
  institute_id: string
  logo: string
  nonteacher_limit: string
  pincode: string
  question_limit: string
  state: string
  status: string
  student_limit: string
  teacher_limit: string
}

export interface getBranchesResponse {
  address: string
  area: string
  branches: Array<BranchTypes>
  city: string
  contact_no: string
  course_ids: any
  email: string
  expiry_date: string
  institute_id: string
  logo: string
  name: string
  nonteacher_limit: string
  question_limit: string
  state: string
  status: string
  student_limit: string
  teacher_limit: string
}

export interface InitialState {
  isLoading: boolean
  addBranchesPayload: addBranchProps | null
  getBranchesList: Array<getBranchesResponse>
}
