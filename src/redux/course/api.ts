import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import { CourseProps, getCourseResponse, SubjectPayloadProps } from './types'

export const addCourses = createAsyncThunk(
  'course/addCourse',
  async (requestPayload: CourseProps, { dispatch }): Promise<any> => {
    const response = await api.post(apiEndpoints.addCourse, requestPayload)
    if (response?.data.status_code === 200) {
      history.push(ROUTES.COURSE)
      dispatch(getAllCourse())
    }
    return response
  }
)

export const addSubjects = createAsyncThunk(
  'subject/addSubject',
  async (requestPayload: SubjectPayloadProps): Promise<any> => {
    const response = await api.post(apiEndpoints.addSubject, requestPayload)
    return response
  }
)

export const getAllCourse = createAsyncThunk(
  'course/getAllCourse',
  async (): Promise<Array<getCourseResponse>> => {
    const response = await api.get(apiEndpoints.getAllCourse)
    return response?.data.response.Items
  }
)

export const getSingleCourse = createAsyncThunk(
  'course/getSingleSubject',
  async (requestPayload: { course_id: any }): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getSingleCourse,
      requestPayload
    )
    return response?.data.response
  }
)
