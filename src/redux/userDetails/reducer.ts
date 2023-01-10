import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { handleAuthenticate } from './api'
import { initialState } from './types'

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    updateHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: {
    [handleAuthenticate.pending.toString()]: (state) => {
      state.isLoading = true
      state.hasError = false
      state.isLoggedIn = false
    },
    [handleAuthenticate.fulfilled.toString()]: (state, action) => {
      state.isLoading = false
      state.isLoggedIn = !!action.payload
      state.userInfo = action.payload
      state.hasError = !action.payload
    },
    [handleAuthenticate.rejected.toString()]: (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.hasError = true
    }
  }
})

export default userSlice.reducer
