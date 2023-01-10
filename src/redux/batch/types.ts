export interface addBatchProps {
  institute_id: string
  branch_id: string
  id: string
  name: string
  start_date: any
  end_date: any
  start_time: any | Date
  end_time: any
  status: string
  student_limit: string
  course_ids: any
}

export interface getBacthProps {
  Institute_id: any
  branch_id: any
}

export interface getBatchResponse {
  branch_id: string
  course_ids: any
  end_date: string
  end_time: string
  id: string
  institute_id: string
  name: string
  start_date: string
  start_time: string
  status: string
  student_limit: string
}

export interface InitialState {
  isLoading: boolean
  addBatchPayload: addBatchProps | null
  getBatchList: Array<getBatchResponse>
}
