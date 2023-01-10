import { userSlice } from './reducer'
import { handleAuthenticate } from './api'

const { updateIsLoggedIn, updateUserName, updatePassword, updateHasError } =
  userSlice.actions

export {
  updateIsLoggedIn,
  updateUserName,
  updatePassword,
  handleAuthenticate,
  updateHasError
}
