import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menu/reducer'
import userReducer from './userDetails/reducer'
import courseReducer from './course/reducer'
import instituteReducer from './institute/reducer'
import branchReducer from './branch/reducer'
import batchReducer from './batch/reducer'
import userRegistrationReducer from './userRegistration/reducer'
import assignTeacherReducer from './assign/reducer'
import fmsReducer from './fms/reducer'
import teacherAssignmentReducer from './teacherAssignment/reducer'
import learnReducer from './learn/reducers'
import StudentReducer from './student/reducer'
import TeacherLeaveReducer from './teacherLeave/reducers'
import TestReducer from './test/reducers'

const reducer = {
  user: userReducer,
  menu: menuReducer,
  course: courseReducer,
  institute: instituteReducer,
  branch: branchReducer,
  batch: batchReducer,
  userRegistration: userRegistrationReducer,
  assign: assignTeacherReducer,
  fms: fmsReducer,
  teacherAssignment: teacherAssignmentReducer,
  learn: learnReducer,
  student: StudentReducer,
  teacherLeave: TeacherLeaveReducer,
  test: TestReducer
}

const initialState = {}

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
