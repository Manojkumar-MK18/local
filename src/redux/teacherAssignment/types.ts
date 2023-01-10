export interface TeacherPostAssignmentProsp {
  assignment_id: string
  institute_id: string | any
  branch_id: string
  branch_name: string
  batch_id: string
  batch_name: string
  attachment: string | any
  attachment_type: string | any
  assignment_title: string
  assignment_desc: string
  assignment_deadline: string
  uploaded_date: string
  posted_by?: string
}

export interface InitialState {
  isLoading: boolean
  postAssignmentPayload: TeacherPostAssignmentProsp
  isPosted: boolean
}
