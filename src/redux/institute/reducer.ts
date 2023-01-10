import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  addInstitutesApi,
  getAllInstitutes,
  getStudentByBranch,
  StudentAttendance
} from './api'
import {
  getInstituteResponse,
  GetStudentByBranchResponse,
  InitialState
} from './types'

const initialState: InitialState = {
  isLoading: false,
  addInstitutesPayload: {
    institute_id: '',
    address: '',
    area: '',
    city: '',
    code: '',
    contact_no: '',
    country: '',
    course_ids: [],
    branches: [],
    email: '',
    expiry_date: '',
    logo: '',
    name: '',
    nonteacher_limit: '',
    pincode: '',
    question_limit: '',
    state: '',
    status: 'ACTIVE',
    teacher_limit: '',
    student_limit: ''
  },
  getInstituteList: [],
  StudentAttendanceDate: '',
  StudentByBranch: []
}

export const instituteSlice = createSlice({
  name: 'institute',
  initialState,
  reducers: {
    updateSelectedInstitute: (state, action: PayloadAction<any>) => {
      state.addInstitutesPayload = action?.payload
    },
    updateStudentAttendanceDate: (state, action: PayloadAction<string>) => {
      state.StudentAttendanceDate = action?.payload
    },
    resetInstitute: (state) => {
      state.addInstitutesPayload = null
    }
  },
  extraReducers: {
    [addInstitutesApi.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addInstitutesApi.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addInstitutesApi.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getAllInstitutes.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getAllInstitutes.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getInstituteResponse>>
    ) => {
      state.isLoading = false
      state.getInstituteList = action?.payload
    },
    [getAllInstitutes.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [StudentAttendance.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [StudentAttendance.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [StudentAttendance.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getStudentByBranch.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getStudentByBranch.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<GetStudentByBranchResponse>>
    ) => {
      state.isLoading = false
      state.StudentByBranch = action?.payload
    },
    [getStudentByBranch.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default instituteSlice.reducer
