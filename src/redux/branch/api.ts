import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import { addBranchProps } from './types'

export const addBranches = createAsyncThunk(
  'branch/addBranch',
  async (requestPayload: addBranchProps): Promise<any> => {
    const response = await api.post(apiEndpoints.addBranch, requestPayload)
    if (response?.data.status_code === 200) {
      history.push(ROUTES.BRANCH)
    }
    return response
  }
)

export const getBranchByInstitute = createAsyncThunk(
  'branch/getByIns',
  async (requestPayload: { Institute_id: any }): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getBranchByInstitute,
      requestPayload
    )
    return response?.data?.response.Items
  }
)
