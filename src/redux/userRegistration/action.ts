import { AddStudent, addNewTeacher } from './api'
import { userRegistrationSlice } from './reducer'

const {
  updateTeacherDetails,
  resetTeacherDetails,
  resetStaffDetails,
  updateStaffDetails,
  resetError,
  updateStudent
} = userRegistrationSlice.actions

export {
  AddStudent,
  updateTeacherDetails,
  addNewTeacher,
  resetTeacherDetails,
  resetStaffDetails,
  updateStaffDetails,
  resetError,
  updateStudent
}
