import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import api from '../../services'
import {
  AssignedTeacherResponse,
  AssignLessonPlanProps,
  AssignTeacherPayload,
  GetUsersByBranchProps,
  GetUsersByBranchResponse
} from './types'

export const getAllAssignedLists = createAsyncThunk(
  'get/assignedList',
  async (): Promise<any> => {
    const response = await api.get(apiEndpoints.getAllAssignedList)
    return response?.data
  }
)

export const getAllAssignedbyIds = createAsyncThunk(
  'get/assignedTeacher',
  async (requestPayload: {
    Institute_id: string
  }): Promise<Array<AssignedTeacherResponse>> => {
    const response = await api.post(
      apiEndpoints.getAssignedListbyIds,
      requestPayload
    )
    return response?.data.response.Items
  }
)

export const getUsersByBranch = createAsyncThunk(
  'assign/users_by_branch',
  async (
    requestPayload: GetUsersByBranchProps
  ): Promise<Array<GetUsersByBranchResponse>> => {
    const response = await api.post(
      apiEndpoints.getUsersByBranch,
      requestPayload
    )
    return response?.data?.response
  }
)

export const AssignTeacherApi = createAsyncThunk(
  'assign/users',
  async (requestPayload: AssignTeacherPayload): Promise<any> => {
    const response = await api.post(apiEndpoints.assignTeacher, requestPayload)
    return response?.data
  }
)

export const AssignLessonPlan = createAsyncThunk(
  'assign/lessonPlan',
  async (requestPayload: AssignLessonPlanProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.assignLessonPlan,
      requestPayload
    )
    return response?.data
  }
)
