import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addCourses, addSubjects, getAllCourse, getSingleCourse } from './api'
import { getCourseResponse, InitialState } from './types'

const initialState: InitialState = {
  isLoading: false,
  addCoursePayload: {
    Course_Name: '',
    course_id: '',
    Description: '',
    Icon: '',
    combination: ''
  },
  addSubjectPayload: {
    course_id: '',
    Subjects: []
  },
  getCourseList: [],
  getCourseById: []
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: {
    [addCourses.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addCourses.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addCourses.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [addSubjects.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addSubjects.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addSubjects.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getAllCourse.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getAllCourse.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getCourseResponse>>
    ) => {
      state.isLoading = false
      state.getCourseList = action?.payload
    },
    [getAllCourse.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getSingleCourse.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getSingleCourse.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getCourseResponse>>
    ) => {
      state.isLoading = false
      state.getCourseById = action?.payload
    },
    [getSingleCourse.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default courseSlice.reducer
