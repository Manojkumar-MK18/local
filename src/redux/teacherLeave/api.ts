import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import api from '../../services'
import { TeacherDetailsProsp } from './types'

export const getTeacherInsDetails = createAsyncThunk(
  'teacher/getTeacher',
  async (requestPayload: TeacherDetailsProsp): Promise<any> => {
    const response = await api.post(
      apiEndpoints.teacherInsDetails,
      requestPayload
    )
    return response?.data.response
  }
)
