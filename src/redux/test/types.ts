import {
  questionLists,
  QuestionProps
} from '../../pages/student/Test/TestPage/const'

export interface TestPaper {
  questionLists: Array<QuestionProps>
}

export interface UpdateAnswerPayload {
  id: string
  selectedAnswer?: string
  isMarkedForReview?: boolean
}

export interface CreateTestNameProps {
  test_name_id: string
  test_name: string
  test_name_description: string
}
export interface InitialState {
  isLoading: boolean
  isMarkedForReview: UpdateAnswerPayload
  TestPaper: TestPaper | null
  createTestName: CreateTestNameProps
}

export const initialState: InitialState = {
  isLoading: false,
  isMarkedForReview: {
    id: '',
    isMarkedForReview: false
  },
  TestPaper: {
    questionLists: questionLists
  },
  createTestName: {
    test_name: '',
    test_name_description: '',
    test_name_id: ''
  }
}
