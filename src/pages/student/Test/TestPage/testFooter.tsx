import React from 'react'
import strings from '../../../../locale/en'
import {
  MarkedReviewButton,
  SubmitButton,
  TestFooterWrapper
} from './subcomponents'

interface TestFooterProps {
  onReview: () => void
  onSubmit: () => void
  reviewText: string | any
}

const TestFooter = ({ onSubmit, onReview, reviewText }: TestFooterProps) => {
  const {
    student: {
      assessment: {
        test: { submit }
      }
    }
  } = strings
  return (
    <TestFooterWrapper>
      <MarkedReviewButton onClick={onReview}>{reviewText}</MarkedReviewButton>
      <SubmitButton onClick={onSubmit}>{submit}</SubmitButton>
    </TestFooterWrapper>
  )
}

export default TestFooter
