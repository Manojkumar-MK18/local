export interface getTransportHostelProsp {
  Institute_id: string
  branch_id: string
}

export interface selectedUserFeeDetails {
  bank?: string
  fees_details?: Array<FeesProps>
  fee_paid_date?: any
  due_date?: any
  remarks?: string
  user_id?: string
  fine_amount?: string
  invoice_number?: string
  mode_of_payment?: string
  ref_no?: string
  cashier_name?: string
  totalFee?: string
  totalconcession?: string
  paidAmount?: string
}
export interface selectedUserDetails {
  userid: string | any
  insId?: string | any
  branchId?: string | any
  courseId?: string | any
  year?: string | any
  name?: string | any
  branchName?: string | any
  batchName?: string | any
  courseName?: string | any
}

export interface getFmsProps {
  Institute_id: string
  Branch_id?: string
  course_id?: string
}

export interface fmsTermsTypes {
  Fee: string
  end_date: string
  start_date: string
  term_name: string
  term_id: string
}

export interface fmsCourseTypes {
  Course_id: string | any
  Course_name: string
  term: Array<fmsTermsTypes>
}

export interface fmsBranchTypes {
  Branch_id: string
  Courses: Array<fmsCourseTypes>
  Miscellaneous: string
}

export interface getFmsByIdsResponse {
  Branch: Array<fmsBranchTypes>
  Institute_id: string
  Year: string
  fms_id: string
  Fms_Name: string
}

export interface fmsBranchCourseTypes {
  Branch_id: string
  Courses: fmsCourseTypes
  Miscellaneous: string
}

export interface getFmsByCourseIdsResponse {
  Branch: fmsBranchCourseTypes
}

export interface getTransportList {
  Branch_id: string
  Institute_id: string
  Route_from: string
  Route_to: string
  transport_id: string
  transport_name: string
}

export interface RoomType {
  fee: string
  type: string
}

export interface getHostelList {
  Branch_id: string
  Hostel_Name: string
  Institute_id: string
  Rooms: Array<RoomType>
  hostel_id: string
}

export interface FeesProps {
  fees_paid_id?: any
  fee_paid_amount?: string | any
  fee_type?: any
  Fee?: any
  fee_balance?: any
  consession_amount?: string
}

export interface updateFmsFeeProps {
  bank?: string
  fees_details: Array<FeesProps>
  fee_paid_date?: any
  due_date?: any
  remarks?: string
  fine_amount?: string
  invoice_number?: string
  mode_of_payment?: string
  ref_no?: string
  cashier_name?: string
}

export interface InitialState {
  isLoading: boolean
  getFmsList: Array<getFmsByIdsResponse>
  getFmsListByCourse: Array<getFmsByCourseIdsResponse>
  getHostelListsData: Array<getHostelList>
  getTransportListsData: Array<getTransportList>
  updateFmsFeeDetails: updateFmsFeeProps | null
  setselectedUserFeeDetails: selectedUserFeeDetails
  setselectedUserDetails: selectedUserDetails
  setSelectedStudentFeeDetails: Array<updateFmsFeeProps>
}
