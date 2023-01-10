import { getSubjectsList } from './api'
import { learnSlice } from './reducers'

const {
  updateSelectedMaterial,
  updateCourseType,
  updateSubjectName,
  updateChapterName,
  UpdateSelectedChapterId,
  updateSessionName,
  UpdateSessionId,
  UpdateSelectedSubjectId
} = learnSlice.actions

export {
  getSubjectsList,
  updateSelectedMaterial,
  updateSessionName,
  UpdateSessionId,
  updateCourseType,
  updateSubjectName,
  UpdateSelectedChapterId,
  UpdateSelectedSubjectId,
  updateChapterName
}
