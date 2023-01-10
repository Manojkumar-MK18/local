import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import {
  getInstitiuteProps,
  GetStudentByBranch,
  InstituteProps,
  StudentAttendanceProp
} from './types'

export const addInstitutesApi = createAsyncThunk(
  'institutes/addInstitues',
  async (requestPayload: InstituteProps, { dispatch }): Promise<any> => {
    const response = await api.post(apiEndpoints.addInstitute, requestPayload)
    if (response?.data.status_code === 200) {
      history.push(ROUTES.INSTITUTES)
      dispatch(
        getAllInstitutes({
          get_all: true,
          institute_id: ''
        })
      )
    }
    return response?.data
  }
)

export const getAllInstitutes = createAsyncThunk(
  'ins/getIns',
  async (requestPayload: getInstitiuteProps): Promise<any> => {
    const response = await api.post(apiEndpoints.getInstitutes, requestPayload)
    return response?.data.response.Items
  }
)

export const getSingleInstitutes = createAsyncThunk(
  'inst/getSingleIns',
  async (requestPayload: getInstitiuteProps): Promise<any> => {
    const response = await api.post(apiEndpoints.getInstitutes, requestPayload)
    return response?.data
  }
)

export const StudentAttendance = createAsyncThunk(
  'inst/studentAttendance',
  async (requestPayload: StudentAttendanceProp): Promise<any> => {
    const response = await api.post(
      apiEndpoints.studentAttendance,
      requestPayload
    )
    return response?.data
  }
)

export const getStudentByBranch = createAsyncThunk(
  'institute/student_by_branch',
  async (requestPayload: GetStudentByBranch): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getStudentByBranch,
      requestPayload
    )
    return response?.data?.response
  }
)
