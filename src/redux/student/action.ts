import { StudentGetAssignments } from './api'
import { StudentSlice } from './reducer'

const {
  updateAssignmentId,
  updateAssignmentDate,
  updateAssignmentTitle,
  updateAssignmentDescription,
  updateAssignmentPostedBy,
  updateBranchName,
  updateBatchName
} = StudentSlice.actions

export {
  StudentGetAssignments,
  updateAssignmentId,
  updateAssignmentDate,
  updateAssignmentTitle,
  updateAssignmentDescription,
  updateAssignmentPostedBy,
  updateBranchName,
  updateBatchName
}
