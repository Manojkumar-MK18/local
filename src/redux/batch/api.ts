import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import { getBacthProps } from './types'

export const addBatches = createAsyncThunk(
  'batch/addbatch',
  async (requestPayload: any): Promise<any> => {
    const response = await api.post(apiEndpoints.addBatch, requestPayload)
    if (response?.data.status_code === 200) {
      history.push(ROUTES.BATCH)
    }
    return response
  }
)

export const getBatchByIds = createAsyncThunk(
  'batch/getBatchbyIds',
  async (requestPayload: getBacthProps): Promise<any> => {
    const response = await api.post(apiEndpoints.getBatchByIds, requestPayload)
    return response?.data.response
  }
)
