import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import api from '../../services'
import {
  getChapterListProps,
  getMaterialListProps,
  getSubjectListProps,
  getTopicsListProps
} from './types'

export const getSubjectsList = createAsyncThunk(
  'subjects/getSubjects',
  async (requestPayload: getSubjectListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    return response?.data.response
  }
)

export const getChaptersList = createAsyncThunk(
  'chapters/getChapters',
  async (requestPayload: getChapterListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    if (response?.data) {
      history.push(ROUTES.CHAPTER)
    }
    return response?.data.response
  }
)

export const getTopicsList = createAsyncThunk(
  'topics/getTopics',
  async (requestPayload: getTopicsListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    if (response?.data) {
      history.push(ROUTES.TOPICS)
    }
    return response?.data.response
  }
)

export const getMaterialList = createAsyncThunk(
  ' material/getMaterial',
  async (requestPayload: getMaterialListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    if (response?.data) {
      history.push(ROUTES.MATERIALS)
    }
    return response?.data.response
  }
)

export const getGradeLabSubjectsList = createAsyncThunk(
  'subjects/getLabSubjects',
  async (requestPayload: getSubjectListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    return response?.data.response
  }
)

export const getGradeClassSubjectsList = createAsyncThunk(
  'subjects/getTypeSubjects',
  async (requestPayload: getSubjectListProps): Promise<any> => {
    const response = await api.post(
      apiEndpoints.getLearnSubjectLists,
      requestPayload
    )
    return response?.data.response
  }
)
