import { addInstitutesApi } from './api'

import { instituteSlice } from './reducer'

const { updateSelectedInstitute, resetInstitute, updateStudentAttendanceDate } =
  instituteSlice.actions

export {
  addInstitutesApi,
  updateSelectedInstitute,
  resetInstitute,
  updateStudentAttendanceDate
}
