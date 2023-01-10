import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addBatches, getBatchByIds } from './api'
import { addBatchProps, getBatchResponse, InitialState } from './types'

const initialState: InitialState = {
  isLoading: false,
  addBatchPayload: {
    institute_id: '',
    branch_id: '',
    id: '',
    name: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    status: '',
    student_limit: '',
    course_ids: []
  },
  getBatchList: []
}

export const batchSlice = createSlice({
  name: 'batch',
  initialState,
  reducers: {
    updateSelectedBatch: (
      state,
      action: PayloadAction<addBatchProps | any>
    ) => {
      state.addBatchPayload = action?.payload
    },
    resetBatch: (state) => {
      state.addBatchPayload = null
    }
  },
  extraReducers: {
    [addBatches.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addBatches.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addBatches.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getBatchByIds.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getBatchByIds.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getBatchResponse>>
    ) => {
      state.isLoading = false
      state.getBatchList = action?.payload
    },
    [getBatchByIds.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default batchSlice.reducer
