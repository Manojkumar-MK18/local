export interface StudentGetAssignmentPayload {
  Institute_id?: string
  branch_id?: string
  batch_id?: string
  date?: string
}

export interface GetCompletedAssignmentPayload {
  Institute_id?: string
  branch_id?: string
  batch_id?: string
  date?: string
  student_id?: string
}

export interface StudentGetAssignmentResponse {
  branch_id: string
  branch_name: string
  assignment_title: string
  assignment_desc: string
  assignment_id: string
  attachment: string
  attachment_type?: any
  institute_id: string
  batch_id: string
  batch_name: string
  student_info: Array<StudentPostAssignmentPayload>
  uploaded_date: string
  assignment_deadline: string
  posted_by: string
}

export interface GetCompletedAssignmentResponse {
  branch_id: string
  branch_name: string
  assignment_title: string
  assignment_id: string
  attachment: string
  institute_id: string
  batch_id: string
  batch_name: string
  posted_by: string
  completed_date: string
  comment: string
  review: string
}

export interface StudentPostAssignmentPayload {
  assignment_id: string
  attachment: string
  attachment_type: string
  student_id?: string
  student_name?: string
  completed_date: string
  description: string
  comment?: string
  review?: string
  is_completed?: boolean
}

export interface ReviewAssignmentProps {
  assignment_id: string
  student_id: string | any
  comment: string | any
  review: string
  is_completed: boolean
}

export interface InitialState {
  isLoading: boolean
  GetAssignment: Array<StudentGetAssignmentResponse>
  GetCompletedAssignment: Array<GetCompletedAssignmentResponse>
  assignment_id: string
  assignment_date: string
  assignment_title: string
  assignment_desc: string
  assignment_posted_by: string
  branchName: string
  batchName: string
  reviewAssignmentPaylaod: ReviewAssignmentProps
}
