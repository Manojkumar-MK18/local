export interface TeacherDetailsProsp {
  Institute_id: string | any
  user_id: string | any
}

export interface batchInfo {
  batch_id: string
  batch_name: string
  lesson_plan: Array<any>
}

export interface TeacherDetailsResponse {
  Institute_id: string
  batch: Array<any>
  branch_id: string
  branch_name: string
}

export interface InitialState {
  isLoading: boolean
  getTeacherDetails: Array<TeacherDetailsResponse>
}
