export interface InstitueActionProps {
  handleEdit: () => void
  handleDelete: () => void
  handleView: () => void
}

export interface CourseSelectionProps {
  /* eslint-disable no-unused-vars */
  onSelect: (courses: Array<any>) => void
  isEdit: boolean
}
export interface CourseCheckBoxProps {
  courses: Array<CourseSelectOptions>
  /* eslint-disable no-unused-vars */
  setCourses: (courses: Array<CourseSelectOptions>) => void
}
export interface CourseSelectOptions {
  id: string
  name: string
  selected?: boolean
}
