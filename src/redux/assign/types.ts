export interface GetUsersByBranchProps {
  institute_id: string
  role: string
  branch_id: [
    {
      branch_id: string
    }
  ]
}

export interface GetUsersByBranchResponse {
  educational_background: string
  institute_id: string
  email: string
  collage_name: string
  spouse_name: string
  bank_name: string
  emergency_connumber: string
  previous_institutename: string
  contract_start_date: string
  state: string
  city: string
  PAN_number: string
  profile_pictute: string
  fathername: string
  bank_branch: string
  bank_ifsc: string
  mobile: string
  EPS_account_number: string
  dob: string
  firstname: string
  area_name: string
  emergnecy_contact_person: string
  passport_expiry: string
  branch_id: Array<string>
  department: string
  pincode: string
  designation: string
  date_of_joining: string
  address: string
  blood_group: string
  gender: string
  lastname: string
  collage_cityname: string
  country_of_issue: string
  user_id: string
  PF_account_number: string
  role: string
  passport_no: string
  contract_type: string
  bank_account_no: string
  completion_year: string
  expericence: string
}

interface BatchType {
  batch_id: string
  batch_name: string
}

export interface AssignTeacherPayload {
  assign_teacher_id: string
  institute_id: string
  institute_name: string
  branch_id: string
  branch_name: string
  teacher_id: string
  teacher_name: string
  batch: Array<BatchType>
  assigned_by: string
  assigned_date: string
}

export interface AssignLessonPlanProps {
  assign_teacher_id: string
  institute_id: string
  branch_id: string
  batch_id: string
  teacher_id: string
  subject_id: string
  subject_name: string
  chapter: string
  deadline: string
}

export interface UpdateLessonPlanProps {
  assign_teacher_id: string
  institute_id: string
  branch_id: string
  teacher_id: string
}

export interface AssignedTeacherResponse {
  assign_teacher_id: string
  institute_id: string
  institute_name: string
  branch: [
    {
      branch_id: string
      teachers: [
        {
          batch: [
            {
              batch_id: string
              batch_name: string
              lesson_plan: []
            }
          ]
          teacher_name: string
          assigned_by: string
          assigned_date: string
          teacher_id: string
        }
      ]
      branch_name: string
    }
  ]
}

export interface InitialState {
  isLoading: boolean
  userByBranch: Array<GetUsersByBranchResponse>
  updateLesson: UpdateLessonPlanProps
  getAssignedTeachers: Array<AssignedTeacherResponse>
}
