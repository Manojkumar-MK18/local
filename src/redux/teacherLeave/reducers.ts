import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTeacherInsDetails } from './api'
import { InitialState, TeacherDetailsResponse } from './types'

const initialState: InitialState = {
  isLoading: false,
  getTeacherDetails: []
}

export const teacherLeaveSlice = createSlice({
  name: 'teacherLeave',
  initialState,
  reducers: {},
  extraReducers: {
    [getTeacherInsDetails.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getTeacherInsDetails.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<TeacherDetailsResponse>>
    ) => {
      state.isLoading = false
      state.getTeacherDetails = action?.payload
    },
    [getTeacherInsDetails.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default teacherLeaveSlice.reducer
