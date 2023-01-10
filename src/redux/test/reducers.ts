import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, UpdateAnswerPayload } from './types'

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    updateMarkedQuestion: (
      state,
      action: PayloadAction<UpdateAnswerPayload>
    ) => {
      const updatedQns = state?.TestPaper?.questionLists?.map((question) => {
        if (question.id === action?.payload?.id) {
          return {
            ...question,
            isMarkedForReview: question?.isMarkedForReview ? false : true,
            isSelected: question?.isMarkedForReview ? false : true
          }
        } else {
          return question
        }
      })
      state.TestPaper = {
        questionLists: updatedQns?.length ? updatedQns : []
      }
    },
    updateAnswerForQuestion: (
      state,
      action: PayloadAction<UpdateAnswerPayload>
    ) => {
      const UpdateAnswer = state.TestPaper?.questionLists.map((question) => {
        if (question?.id === action?.payload.id) {
          return {
            ...question,
            selectedAnswer: action.payload.selectedAnswer,
            isSelected: true
          }
        } else {
          return question
        }
      })
      state.TestPaper = {
        questionLists: UpdateAnswer?.length ? UpdateAnswer : []
      }
    }
  },
  extraReducers: {}
})

export default testSlice.reducer
