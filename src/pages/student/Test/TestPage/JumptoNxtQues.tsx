import { ReactElement } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { colors } from '../../../../const/theme'
import strings from '../../../../locale/en'
import { RootState } from '../../../../redux/store'
import { QuestionProps } from './const'
import { determineButtonVariant } from './helper'
import {
  JumpHeader,
  Small,
  JumpQuestionsList,
  StatusMarker,
  JumpButton,
  OverViewTextWrapper
} from './subcomponents'

interface JumpToQuestionsProps {
  quesionList: Array<QuestionProps>
  question: QuestionProps
  //eslint-disable-next-line no-unused-vars
  onClickHandler: (id?: string) => void
}

const JumpToNextQuestions = ({
  quesionList,
  question,
  onClickHandler
}: JumpToQuestionsProps): ReactElement => {
  const { questionLists } = useSelector(
    (state: RootState) => ({
      questionLists: state.test.TestPaper?.questionLists
    }),
    shallowEqual
  )
  return (
    <>
      <JumpHeader>OverView</JumpHeader>
      <OverViewTextWrapper>
        <div>
          <StatusMarker color={colors?.amber} bordercolor={colors?.amber} />
          <Small>{strings.student.assessment.test.marked} </Small>
        </div>
        <p>{questionLists?.filter((dd) => dd?.isMarkedForReview).length}</p>
      </OverViewTextWrapper>
      <OverViewTextWrapper>
        <div>
          <StatusMarker color={colors?.green} bordercolor={colors?.green} />
          <Small>{strings.student.assessment.test.read} </Small>
        </div>
        <p>{questionLists?.filter((dd) => dd?.selectedAnswer).length}</p>
      </OverViewTextWrapper>
      <OverViewTextWrapper>
        <div>
          <StatusMarker bordercolor={colors?.red} color={colors.white} />
          <Small>{strings.student.assessment.test.unRead} </Small>
        </div>
        <p>
          {
            questionLists?.filter((dd) => dd?.selectedAnswer == undefined)
              .length
          }
        </p>
      </OverViewTextWrapper>
      <JumpQuestionsList>
        {quesionList?.map((ques, index) => (
          <JumpButton
            key={`index${index}`}
            // className={determineButtonVariant(ques)}
            variant={determineButtonVariant(ques)}
            active={ques?.id === question?.id}
            onClick={() => onClickHandler(ques?.id)}
          >
            {index + 1}
          </JumpButton>
        ))}
      </JumpQuestionsList>
    </>
  )
}

export default JumpToNextQuestions
