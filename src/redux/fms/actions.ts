import { getFmsListByIds, getHostelsLists, getTransportLists } from './api'

import { fmsSlice } from './reducer'

const {
  updateUserFeeDetails,
  updateUserDetails,
  updateSelectedStudentFeesDetails
} = fmsSlice.actions

export {
  getHostelsLists,
  getFmsListByIds,
  getTransportLists,
  updateUserFeeDetails,
  updateSelectedStudentFeesDetails,
  updateUserDetails
}
