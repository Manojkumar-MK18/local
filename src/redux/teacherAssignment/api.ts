import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import api from '../../services'
import { TeacherPostAssignmentProsp } from './types'

export const teacherPostAssingment = createAsyncThunk(
  'teacher/postTeacher',
  async (requestPayload: TeacherPostAssignmentProsp): Promise<any> => {
    const response = await api.post(
      apiEndpoints.teacherAssignementPost,
      requestPayload
    )
    return response
  }
)
