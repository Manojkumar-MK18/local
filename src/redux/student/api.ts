import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import api from '../../services'
import {
  GetCompletedAssignmentPayload,
  ReviewAssignmentProps,
  StudentGetAssignmentPayload,
  StudentGetAssignmentResponse,
  StudentPostAssignmentPayload
} from './types'

export const StudentGetAssignments = createAsyncThunk(
  'student/GetAssignment',
  async (
    requestPayload: StudentGetAssignmentPayload
  ): Promise<Array<StudentGetAssignmentResponse>> => {
    const response = await api.post(
      apiEndpoints.studentGetAssignment,
      requestPayload
    )
    return response.data.response
  }
)

export const GetCompletedAssignments = createAsyncThunk(
  'student/GetCompletedAssignment',
  async (
    requestPayload: GetCompletedAssignmentPayload
  ): Promise<Array<StudentGetAssignmentResponse>> => {
    const response = await api.post(
      apiEndpoints.studentGetCompletedAssignment,
      requestPayload
    )
    return response.data.response
  }
)

export const StudentPostAssignments = createAsyncThunk(
  'student/PostAssignment',
  async (requestPayload: StudentPostAssignmentPayload): Promise<any> => {
    const response = await api.post(
      apiEndpoints.studentUploadAssigment,
      requestPayload
    )
    if (response.data.status_code === 200) {
      history.goBack()
    }
    return response
  }
)

export const StudentReviewAssignment = createAsyncThunk(
  'assignement/review',
  async (requestPayload: ReviewAssignmentProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.reviewAssignment,
      requestPayload
    )
    if (response.data.status_code === 200) {
      history.goBack()
    }
    return response
  }
)
