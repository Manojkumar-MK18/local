import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getChaptersList,
  getGradeClassSubjectsList,
  getMaterialList,
  getSubjectsList,
  getTopicsList,
  getGradeLabSubjectsList
} from './api'
import {
  GetChapterListResponse,
  getGradeClassResponse,
  GetMaterialListResponse,
  GetSubjectResponse,
  GetTopicListsResponse,
  InitialState,
  selectedMaterialResponse
} from './types'

const initialState: InitialState = {
  isLoading: false,
  getSubjectLists: {
    course_id: '',
    data: []
  },
  getChapterLists: {
    SubjectId: '',
    course_id: '',
    data: []
  },
  getTopicLists: {
    course_id: '',
    SubjectId: '',
    ChapterID: '',
    data: []
  },
  getMaterialLists: {
    course_id: '',
    TopicId: '',
    ChapterID: '',
    SubjectId: '',
    data: []
  },
  selectedMaterial: {
    MaterialName: '',
    MaterialId: '',
    MaterialPath: ''
  },
  getGradeLabSubjectLists: {
    course_id: '',
    data: []
  },
  selectedCourseType: undefined,
  selectedSubjectName: '',
  getGradeClassSubjectLists: {
    course_id: '',
    data: []
  },
  selectedChapterName: '',
  selectedSubjectId: '',
  selectedChapterId: '',
  selectedSessionName: '',
  selectedSessionId: ''
}

export const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    updateCourseType: (state, action: PayloadAction<any>) => {
      state.selectedCourseType = action?.payload
    },
    UpdateSelectedSubjectId: (state, action: PayloadAction<any>) => {
      state.selectedSubjectId = action?.payload
    },
    UpdateSelectedChapterId: (state, action: PayloadAction<any>) => {
      state.selectedChapterId = action?.payload
    },
    updateSubjectName: (state, action: PayloadAction<any>) => {
      state.selectedSubjectName = action?.payload
    },
    updateChapterName: (state, action: PayloadAction<any>) => {
      state.selectedChapterName = action?.payload
    },
    updateSessionName: (state, action: PayloadAction<any>) => {
      state.selectedSessionName = action?.payload
    },
    UpdateSessionId: (state, action: PayloadAction<any>) => {
      state.selectedSessionId = action?.payload
    },
    updateSelectedMaterial: (
      state,
      action: PayloadAction<selectedMaterialResponse>
    ) => {
      state.selectedMaterial = action.payload
    }
  },
  extraReducers: {
    [getSubjectsList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getSubjectsList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetSubjectResponse>
    ) => {
      state.isLoading = false
      state.getSubjectLists = action.payload
    },
    [getSubjectsList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getChaptersList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getChaptersList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetChapterListResponse>
    ) => {
      state.isLoading = false
      state.getChapterLists = action.payload
    },
    [getChaptersList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getTopicsList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getTopicsList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetTopicListsResponse>
    ) => {
      state.isLoading = false
      state.getTopicLists = action.payload
    },
    [getTopicsList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getMaterialList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getMaterialList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetMaterialListResponse>
    ) => {
      state.isLoading = false
      state.getMaterialLists = action.payload
    },
    [getMaterialList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getGradeLabSubjectsList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getGradeLabSubjectsList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetSubjectResponse>
    ) => {
      state.isLoading = false
      state.getGradeLabSubjectLists = action.payload
    },
    [getGradeLabSubjectsList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getGradeClassSubjectsList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getGradeClassSubjectsList.fulfilled.toString()]: (
      state,
      action: PayloadAction<getGradeClassResponse>
    ) => {
      state.isLoading = false
      state.getGradeClassSubjectLists = action.payload
    },
    [getGradeClassSubjectsList.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default learnSlice.reducer
