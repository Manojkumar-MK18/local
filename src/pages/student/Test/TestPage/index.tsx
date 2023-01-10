import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { updateMarkedQuestion } from '../../../../redux/test/actions'
import { QuestionProps } from './const'
import Header from './helper'
import JumpToNextQuestions from './JumptoNxtQues'
import ObjectiveTest from './ObjectiveTest'
import {
  TestWrapper,
  Wrapper,
  DetailsWrapper,
  ImageWrapper,
  QuestionNumberWrapper,
  UserLogo
} from './subcomponents'
import TestFooter from './testFooter'

const Test = (): ReactElement => {
  const { questionLists = [] } = useSelector(
    (state: RootState) => ({
      questionLists: state.test.TestPaper?.questionLists
    }),
    shallowEqual
  )
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const question: QuestionProps = questionLists[currentQuestion]
  const dispatch = useDispatch()
  useEffect(() => {
    let elem = document?.getElementById('myTest')
    elem?.requestFullscreen()
  }, [])

  return (
    <TestWrapper id="myTest">
      <Wrapper>
        <Header titleName={'Physics'} duration={1} />
        <ObjectiveTest
          question={question}
          questionNo={currentQuestion}
          onNext={() => {
            if (currentQuestion < questionLists.length) {
              setCurrentQuestion(currentQuestion + 1)
            }
          }}
          disableNext={currentQuestion + 1 === questionLists?.length}
          onPrevious={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1)
            }
          }}
          disablePrevious={currentQuestion === 0}
        />
        <TestFooter
          reviewText={
            question.isMarkedForReview
              ? 'Mark as UnReview'
              : 'Marked for Review'
          }
          onReview={() => {
            dispatch(
              updateMarkedQuestion({
                id: question?.id,
                isMarkedForReview: true
              })
            )
          }}
          onSubmit={() => {}}
        />
      </Wrapper>
      <DetailsWrapper>
        <ImageWrapper>
          <UserLogo>
            <div>No Previews</div>
          </UserLogo>
        </ImageWrapper>
        <QuestionNumberWrapper>
          <JumpToNextQuestions
            quesionList={questionLists}
            question={question}
            onClickHandler={(id) => {
              const index = questionLists.findIndex((qtn) => qtn?.id === id)
              setCurrentQuestion(index)
            }}
          />
        </QuestionNumberWrapper>
      </DetailsWrapper>
    </TestWrapper>
  )
}

export default Test
