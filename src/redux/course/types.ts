export interface CourseProps {
  Course_Name: string | any
  Icon: any
  Description: any
  course_id: any
  combination: any
}

export interface SubjectProps {
  course_id?: any
  id: any
  Icon: any
  name: any
  description: any
}

export interface SubjectPayloadProps {
  course_id: any
  Subjects: Array<SubjectProps>
}

export interface getCourseResponse {
  Description: string
  Icon: any
  Course_Name: string
  Type: any
  Subjects: Array<any>
  course_id: string | any
}

export interface InitialState {
  isLoading: boolean
  addCoursePayload: CourseProps
  addSubjectPayload: SubjectPayloadProps
  getCourseList: Array<getCourseResponse>
  getCourseById: Array<getCourseResponse>
}
