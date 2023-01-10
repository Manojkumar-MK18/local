import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import api from '../../services'
import { CreateTestNameProps } from './types'

export const createTestName = createAsyncThunk(
  'test/createTestName',
  async (requestPayload: CreateTestNameProps): Promise<any> => {
    const response = await api.post(apiEndpoints.createTestName, requestPayload)
    return response
  }
)

export const getCreateTestNameList = createAsyncThunk(
  'test/testNameList',
  async (): Promise<any> => {
    const response = await api.post(apiEndpoints.getTestName)
    return response
  }
)
