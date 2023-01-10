import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AssignLessonPlan,
  AssignTeacherApi,
  getAllAssignedbyIds,
  getUsersByBranch
} from './api'
import {
  AssignedTeacherResponse,
  GetUsersByBranchResponse,
  InitialState,
  UpdateLessonPlanProps
} from './types'

const initialState: InitialState = {
  isLoading: false,
  userByBranch: [],
  updateLesson: {
    assign_teacher_id: '',
    institute_id: '',
    branch_id: '',
    teacher_id: ''
  },
  getAssignedTeachers: []
}

export const assignSlice = createSlice({
  name: 'assignTeacher',
  initialState,
  reducers: {
    updateLessonPlan: (state, action: PayloadAction<UpdateLessonPlanProps>) => {
      state.updateLesson = action?.payload
    }
  },
  extraReducers: {
    [getUsersByBranch.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getUsersByBranch.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<GetUsersByBranchResponse>>
    ) => {
      state.isLoading = false
      state.userByBranch = action.payload
    },
    [getUsersByBranch.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [AssignTeacherApi.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [AssignTeacherApi.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [AssignTeacherApi.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [AssignLessonPlan.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [AssignLessonPlan.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [AssignLessonPlan.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getAllAssignedbyIds.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getAllAssignedbyIds.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<AssignedTeacherResponse>>
    ) => {
      state.isLoading = false
      state.getAssignedTeachers = action.payload
    },
    [getAllAssignedbyIds.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default assignSlice.reducer
