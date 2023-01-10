import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  GetCompletedAssignments,
  StudentGetAssignments,
  StudentPostAssignments
} from './api'
import {
  GetCompletedAssignmentResponse,
  InitialState,
  StudentGetAssignmentResponse
} from './types'

const initialState: InitialState = {
  isLoading: false,
  GetAssignment: [],
  GetCompletedAssignment: [],
  assignment_id: '',
  assignment_date: '',
  assignment_title: '',
  assignment_desc: '',
  assignment_posted_by: '',
  branchName: '',
  batchName: '',
  reviewAssignmentPaylaod: {
    assignment_id: '',
    review: '',
    comment: '',
    student_id: '',
    is_completed: false
  }
}

export const StudentSlice = createSlice({
  name: 'Student',
  initialState,
  reducers: {
    updateAssignmentId: (state, action: PayloadAction<string>) => {
      state.assignment_id = action.payload
    },
    updateAssignmentDate: (state, action: PayloadAction<string>) => {
      state.assignment_date = action.payload
    },
    updateAssignmentTitle: (state, action: PayloadAction<string>) => {
      state.assignment_title = action.payload
    },
    updateAssignmentDescription: (state, action: PayloadAction<string>) => {
      state.assignment_desc = action.payload
    },
    updateAssignmentPostedBy: (state, action: PayloadAction<string>) => {
      state.assignment_posted_by = action.payload
    },
    updateBranchName: (state, action: PayloadAction<string>) => {
      state.branchName = action.payload
    },
    updateBatchName: (state, action: PayloadAction<string>) => {
      state.batchName = action.payload
    }
  },
  extraReducers: {
    [StudentGetAssignments.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [StudentGetAssignments.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<StudentGetAssignmentResponse>>
    ) => {
      state.isLoading = false
      state.GetAssignment = action.payload
    },
    [StudentGetAssignments.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [StudentPostAssignments.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [StudentPostAssignments.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [StudentPostAssignments.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [GetCompletedAssignments.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [GetCompletedAssignments.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<GetCompletedAssignmentResponse>>
    ) => {
      state.isLoading = false
      state.GetCompletedAssignment = action.payload
    },
    [GetCompletedAssignments.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default StudentSlice.reducer
