export interface getSubjectListProps {
  type: string
  course_id: string
}

export interface ExperimentInfo {
  ExperimentLink: string
  ExperimentLinkThumb: string
  ExperimentName: string
  ExperimentSequence: any
}
export interface SubjectInfo {
  Experiment?: Array<ExperimentInfo>
  SubjectId: string
  SubjectName: string | any
}

export interface GetSubjectResponse {
  course_id: string
  data: Array<SubjectInfo>
}

export interface getChapterListProps {
  type: string
  course_id: string
  SubjectId: string
}

export interface ChapterInfo {
  ChapterID: string
  ChapterName: string
  ChapterSequence: string | any
  Topics: Array<TopicsInfo>
}

export interface GetChapterListResponse {
  SubjectId: string
  course_id: string
  data: Array<ChapterInfo>
}

export interface getTopicsListProps {
  type: string
  course_id: string
  SubjectId: string
  ChapterID: string
}

export interface studyMaterialInfo {
  CdMaterialPath: string
  HwMaterialPath: string
  StudyMaterialPath: string
}

export interface TopicsInfo {
  Material: Array<any>
  StudyMaterial: studyMaterialInfo
  TopicId: string
  TopicName: string
  TopicSequence: string | any
}

export interface GetTopicListsResponse {
  ChapterID: string
  SubjectId: string
  course_id: string
  data: Array<TopicsInfo>
}

export interface getMaterialListProps {
  type: string
  course_id: string
  SubjectId: string
  ChapterID: string
  TopicId: string
}

export interface MaterialInfo {
  MaterialId: string
  MaterialName: string
  MaterialSequence: string | any
  MaterialPath: string
}

export interface GetMaterialListResponse {
  ChapterID: string
  SubjectId: string
  TopicId: string
  course_id: string
  data: Array<MaterialInfo>
}

export interface selectedMaterialResponse {
  MaterialId: string
  MaterialName: string
  MaterialPath: string
  topicName?: any
}

//TYPE3COURSE-TYPES

export interface GradeChapterMaterialInfo {
  ChapterMaterialLink: any
}

export interface GradeMaterialInfo {
  MindMap: Array<any>
  Notes: Array<any>
  OthersVideos: Array<any>
  Video: Array<any>
  Pdf: Array<any>
  Others: Array<any>
  Solution: Array<any>
  PPTX: Array<any>
}

export interface GradeSessionInfo {
  Material: GradeMaterialInfo
  SessionId: string
  SessionName: string
  TeachingMaterial: GradeMaterialInfo
}

export interface GradeChapterInfo {
  ChapterID: string
  ChapterMaterial: Array<GradeChapterMaterialInfo>
  ChapterName: string
  ChapterSequence: any
  Session: Array<GradeSessionInfo>
}

export interface GradeInfo {
  SubjectId: string
  SubjectName: string
  Chapters: Array<GradeChapterInfo>
}

export interface getGradeClassResponse {
  course_id: string
  data: Array<GradeInfo>
}

export interface InitialState {
  isLoading: boolean
  getSubjectLists: GetSubjectResponse
  getChapterLists: GetChapterListResponse
  getTopicLists: GetTopicListsResponse
  getMaterialLists: GetMaterialListResponse
  selectedMaterial: selectedMaterialResponse
  selectedCourseType: any
  selectedSubjectName: any
  selectedChapterName: any
  selectedSessionName: any
  selectedSubjectId: any
  selectedChapterId: any
  selectedSessionId: any
  getGradeLabSubjectLists: GetSubjectResponse
  getGradeClassSubjectLists: getGradeClassResponse
}
