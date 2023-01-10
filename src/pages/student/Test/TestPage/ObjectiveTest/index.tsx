import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { FlexWrapper } from '../../../../../components'
import { updateAnswerForQuestion } from '../../../../../redux/test/actions'
import { QuestionProps } from '../const'
import { TestQuestionsWrapper } from '../subcomponents'
import {
  ArrowIcons,
  ButtonIcon,
  Option,
  Options,
  QuestionContentWrapper,
  QuestionNumber,
  QuestionText
} from './subcomponents'

interface ObjectTiveTestProps {
  question: QuestionProps
  questionNo: number
  onPrevious: () => void
  onNext: () => void
  disableNext?: boolean
  disablePrevious?: boolean
}

const ObjectiveTest = ({
  question,
  questionNo,
  onNext,
  onPrevious,
  disableNext,
  disablePrevious
}: ObjectTiveTestProps): ReactElement => {
  const dispatch = useDispatch()
  return (
    <QuestionContentWrapper>
      <FlexWrapper noMargin noPadding justifyContent="space-between">
        <ButtonIcon disabled={disablePrevious} onClick={onPrevious}>
          <ArrowIcons icon={['fas', 'chevron-left']} />
        </ButtonIcon>
        <ButtonIcon disabled={disableNext} onClick={onNext}>
          <ArrowIcons icon={['fas', 'chevron-right']} />
        </ButtonIcon>
      </FlexWrapper>
      <TestQuestionsWrapper>
        <QuestionNumber>
          <span>{`Q${questionNo + 1}. `}</span>
          <QuestionText
            dangerouslySetInnerHTML={{
              __html: `  ${question?.question}`
            }}
          />
        </QuestionNumber>
        <Options>
          <Option
            dangerouslySetInnerHTML={{ __html: `A. ${question?.optionA}` }}
            role="button"
            isSelected={question.selectedAnswer === 'a'}
            onClick={() => {
              dispatch(
                updateAnswerForQuestion({
                  id: question?.id,
                  selectedAnswer: 'a'
                })
              )
            }}
          />
          <Option
            dangerouslySetInnerHTML={{ __html: `B. ${question?.optionB}` }}
            isSelected={question.selectedAnswer === 'b'}
            role="button"
            onClick={() => {
              dispatch(
                updateAnswerForQuestion({
                  id: question?.id,
                  selectedAnswer: 'b'
                })
              )
            }}
          />
          <Option
            dangerouslySetInnerHTML={{ __html: `C. ${question?.optionC}` }}
            role="button"
            isSelected={question.selectedAnswer === 'c'}
            onClick={() => {
              dispatch(
                updateAnswerForQuestion({
                  id: question?.id,
                  selectedAnswer: 'c'
                })
              )
            }}
          />
          <Option
            dangerouslySetInnerHTML={{ __html: `D. ${question?.optionD}` }}
            role="button"
            isSelected={question.selectedAnswer === 'd'}
            onClick={() => {
              dispatch(
                updateAnswerForQuestion({
                  id: question?.id,
                  selectedAnswer: 'd'
                })
              )
            }}
          />
        </Options>
      </TestQuestionsWrapper>
    </QuestionContentWrapper>
  )
}

export default ObjectiveTest
