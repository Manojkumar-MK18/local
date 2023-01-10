import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import strings from '../../locale/en'
import {
  addNewStaff,
  addNewTeacher,
  AddStudent,
  getDepartmentList,
  getAdminListbyId
} from './api'
import {
  OnChangeHandler,
  initialState,
  getDepartmentResponse,
  UpdateStudent,
  addAdminProps
} from './types'

export const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    updateTeacherDetails: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const teacherInfo = {
        ...state.addTeacher,
        [key]: action.payload[key]
      }
      state.addTeacher = teacherInfo
    },
    updateStaffDetails: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action?.payload)[0]
      const staffInfo = {
        ...state.addNewStaffDetails,
        [key]: action?.payload[key]
      }
      state.addNewStaffDetails = staffInfo
    },
    updateStudent: (state, action: PayloadAction<UpdateStudent>) => {
      state.studentpdate = action?.payload
    },
    resetTeacherDetails: (state) => {
      state.addTeacher = {
        user_role: 'TEACHER'
      }
    },
    resetStaffDetails: (state) => {
      state.addNewStaffDetails = {
        user_role: 'STAFF'
      }
    },
    resetError: (state) => {
      state.error = ''
    }
  },
  extraReducers: {
    [AddStudent.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [AddStudent.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [AddStudent.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewTeacher.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addNewTeacher.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewTeacher.rejected.toString()]: (state, action) => {
      state.isLoading = false
      state.error = action.payload || strings.users.addTeacher.saveTeacherError
      window.scrollTo({ top: 0 })
    },
    [addNewStaff.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addNewStaff.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewStaff.rejected.toString()]: (state, action) => {
      state.isLoading = false
      state.error = action.payload || strings.users.addTeacher.saveTeacherError
      window.scrollTo({ top: 0 })
    },
    [getDepartmentList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getDepartmentList.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getDepartmentResponse>>
    ) => {
      state.isLoading = false
      state.getDepartmentLists = action?.payload
    },
    [getDepartmentList.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getAdminListbyId.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getAdminListbyId.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<addAdminProps>>
    ) => {
      state.isLoading = false
      state.getAdminLists = action?.payload
    },
    [getAdminListbyId.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default userRegistrationSlice.reducer
