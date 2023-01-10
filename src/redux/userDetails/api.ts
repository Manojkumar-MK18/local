import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import api from '../../services'
import { LoginPayload, UserInfo } from './types'

export const handleAuthenticate = createAsyncThunk(
  'user/authenticate',
  async (payload: LoginPayload): Promise<UserInfo> => {
    const response = await api.post(apiEndpoints.auth, payload)
    const userInfo = response.data
    return userInfo.user
  }
)
