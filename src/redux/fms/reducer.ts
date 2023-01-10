import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getFmsListByCourseIds,
  getFmsListByIds,
  getHostelsLists,
  getTransportLists
} from './api'
import {
  getFmsByCourseIdsResponse,
  getFmsByIdsResponse,
  getHostelList,
  getTransportList,
  InitialState,
  selectedUserDetails,
  selectedUserFeeDetails
} from './types'

const initialState: InitialState = {
  isLoading: false,
  getFmsList: [],
  getHostelListsData: [],
  getTransportListsData: [],
  getFmsListByCourse: [],
  updateFmsFeeDetails: {
    bank: '',
    fee_paid_date: '',
    fine_amount: '',
    invoice_number: '',
    mode_of_payment: '',
    ref_no: '',
    fees_details: []
  },
  setselectedUserFeeDetails: {
    fees_details: []
  },
  setSelectedStudentFeeDetails: [],
  setselectedUserDetails: {
    userid: ''
  }
}

export const fmsSlice = createSlice({
  name: 'fms',
  initialState,
  reducers: {
    updateUserFeeDetails: (
      state,
      action: PayloadAction<selectedUserFeeDetails>
    ) => {
      state.setselectedUserFeeDetails = action?.payload
    },
    updateUserDetails: (state, action: PayloadAction<selectedUserDetails>) => {
      state.setselectedUserDetails = action?.payload
    },
    updateSelectedStudentFeesDetails: (state, action: PayloadAction<any>) => {
      state.setSelectedStudentFeeDetails = action?.payload
    }
  },
  extraReducers: {
    [getFmsListByIds.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getFmsListByIds.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getFmsByIdsResponse>>
    ) => {
      state.isLoading = false
      state.getFmsList = action?.payload
    },
    [getFmsListByIds.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getTransportLists.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getTransportLists.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getTransportList>>
    ) => {
      state.isLoading = false
      state.getTransportListsData = action?.payload
    },
    [getTransportLists.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getHostelsLists.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getHostelsLists.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getHostelList>>
    ) => {
      state.isLoading = false
      state.getHostelListsData = action?.payload
    },
    [getHostelsLists.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getFmsListByCourseIds.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getFmsListByCourseIds.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getFmsByCourseIdsResponse>>
    ) => {
      state.isLoading = false
      state.getFmsListByCourse = action?.payload
    },
    [getFmsListByCourseIds.rejected.toString()]: (state) => {
      state.isLoading = false
    }
  }
})

export default fmsSlice.reducer
