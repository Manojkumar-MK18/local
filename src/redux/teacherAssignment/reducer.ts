import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { teacherPostAssingment } from './api'
import { InitialState } from './types'

const initialState: InitialState = {
  isLoading: false,
  postAssignmentPayload: {
    assignment_id: '',
    institute_id: '',
    branch_id: '',
    branch_name: '',
    batch_id: '',
    attachment_type: '',
    batch_name: '',
    attachment: '',
    assignment_title: '',
    assignment_desc: '',
    assignment_deadline: '',
    uploaded_date: ''
  },
  isPosted: false
}

export const teacherAssignmentSlice = createSlice({
  name: 'teacherAssignment',
  initialState,
  reducers: {
    updateIsAssignmentPosted: (state, action: PayloadAction<boolean>) => {
      state.isPosted = action.payload
    }
  },
  extraReducers: {
    [teacherPostAssingment.pending.toString()]: (state) => {
      state.isLoading = true
      state.isPosted = false
    },
    [teacherPostAssingment.fulfilled.toString()]: (state) => {
      state.isLoading = false
      state.isPosted = true
    },
    [teacherPostAssingment.rejected.toString()]: (state) => {
      state.isLoading = false
      state.isPosted = false
    }
  }
})

export default teacherAssignmentSlice.reducer
