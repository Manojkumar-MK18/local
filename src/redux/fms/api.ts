import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import {
  getFmsProps,
  getTransportHostelProsp,
  updateFmsFeeProps
} from './types'

export const getHostelsLists = createAsyncThunk(
  'hostel/getHostel',
  async (requestPayload: getTransportHostelProsp): Promise<any> => {
    const response = await api.post(apiEndpoints.getHostel, requestPayload)
    return response.data.response.Items
  }
)

export const getTransportLists = createAsyncThunk(
  'transport/getTransport',
  async (requestPayload: getTransportHostelProsp): Promise<any> => {
    const response = await api.post(apiEndpoints.getTransport, requestPayload)
    return response.data.response.Items
  }
)

export const getFmsListByIds = createAsyncThunk(
  'fms/getFms',
  async (requestPayload: getFmsProps): Promise<any> => {
    const response = await api.post(apiEndpoints.getFms, requestPayload)
    return response?.data.response.Items
  }
)

export const getFmsListByCourseIds = createAsyncThunk(
  'fms/getFms',
  async (requestPayload: any): Promise<any> => {
    const response = await api.post(apiEndpoints.getFmsByCourse, requestPayload)
    if (response?.data) {
      history.push(ROUTES.FEE_DESCRIPTION)
    }
    return response?.data.response
  }
)

export const updateFeeModule = createAsyncThunk(
  'fms/updateFms',
  async (requestPayload: updateFmsFeeProps): Promise<any> => {
    const response = await api.post(apiEndpoints?.updateFmsFee, requestPayload)
    if (response?.data) {
      history.push(ROUTES.INVOICE_PRINT)
    }
    return response
  }
)

export const updateFdfeeModule = createAsyncThunk(
  'fms/updateFms',
  async (requestPayload: updateFmsFeeProps): Promise<any> => {
    const response = await api.post(apiEndpoints?.updateFmsFee, requestPayload)
    if (response?.data) {
      history.push(ROUTES.INVOICE_PRINT)
    }
    return response
  }
)
