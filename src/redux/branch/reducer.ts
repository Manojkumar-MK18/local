import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addBranches, getBranchByInstitute } from './api'
import { addBranchProps, getBranchesResponse, InitialState } from './types'

const initialState: InitialState = {
  isLoading: false,
  addBranchesPayload: {
    institute_id: '',
    address: '',
    area: '',
    city: '',
    batch: [],
    contact_no: '',
    course_ids: [],
    email: '',
    expiry_date: '',
    branch_id: '',
    logo: '',
    name: '',
    nonteacher_limit: '',
    pincode: '',
    question_limit: '',
    state: '',
    status: 'ACTIVE',
    student_limit: '',
    teacher_limit: ''
  },
  getBranchesList: []
}

export const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    updateSelectedBranch: (
      state,
      action: PayloadAction<addBranchProps | any>
    ) => {
      state.addBranchesPayload = action?.payload
    },
    resetBranch: (state) => {
      state.addBranchesPayload = null
    }
  },
  extraReducers: {
    [addBranches.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addBranches.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addBranches.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getBranchByInstitute.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getBranchByInstitute.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getBranchesResponse>>
    ) => {
      state.isLoading = false
      state.getBranchesList = action?.payload
    },
    [getBranchByInstitute.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default branchSlice.reducer
