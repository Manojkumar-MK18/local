import { teacherPostAssingment } from './api'
import { teacherAssignmentSlice } from './reducer'

const { updateIsAssignmentPosted } = teacherAssignmentSlice.actions

export { teacherPostAssingment, updateIsAssignmentPosted }
