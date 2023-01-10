import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { FlexWrapper } from '../../../components'
import fonts, { weight } from '../../../const/fonts'
import ROUTES from '../../../const/routes'
import { colors } from '../../../const/theme'
import strings from '../../../locale/en'
import { H2, Small } from '../../../typography'
import {
  CardSubtitle,
  CardTitle,
  ChapterNumber,
  ChapterWrapper,
  SubtitleWrapper,
  TakeTestButton,
  TopicWrapper
} from './subcomponents'
import {
  AttemptTestSubjectListProps,
  UpcomingTestProps,
  AttemptTestTopicListProsp
} from './types'

export const UpcommingTest = ({
  date,
  subject,
  attemptEvents,
  length
}: UpcomingTestProps): ReactElement => {
  return (
    <>
      <FlexWrapper noMargin noPadding justifyContent="space-between">
        <Small font="12px" isHelpText>
          {date}
        </Small>
        <Small font="12px">{attemptEvents}</Small>
      </FlexWrapper>
      <FlexWrapper noPadding justifyContent="start">
        <H2
          font={`${fonts.small}px`}
          color={`${colors.black}`}
          fontWeight={`${weight.xBold}`}
          padding={'0'}
        >
          {subject}
        </H2>
      </FlexWrapper>
      {length === 1 ? '' : <hr />}
    </>
  )
}

export const AttemptTestSubjectListsActions = ({
  sequenceNo,
  title,
  testAtempted,
  testPending,
  chaptersTestCount,
  onClick
}: AttemptTestSubjectListProps): ReactElement => {
  const {
    student: {
      assessment: {
        attempt: { chaptersTest, attempted, pending }
      }
    }
  } = strings
  return (
    <>
      <ChapterWrapper onClick={onClick}>
        <ChapterNumber>{sequenceNo}</ChapterNumber>
        <CardTitle fontSize="18px">{title}</CardTitle>
        <SubtitleWrapper>
          <FlexWrapper noMargin noPadding>
            <CardSubtitle
              className="mt-2 text-muted"
              fontSize="12px"
              fontWeight="500"
            >
              {chaptersTest} : {chaptersTestCount}
            </CardSubtitle>
            <CardSubtitle
              className="mt-2 text-muted"
              fontSize="12px"
              fontWeight="500"
            >
              {attempted} : {testAtempted}
            </CardSubtitle>
            <CardSubtitle
              className="mt-2 text-muted"
              fontSize="12px"
              fontWeight="500"
            >
              {pending} : {testPending}
            </CardSubtitle>
          </FlexWrapper>
        </SubtitleWrapper>
      </ChapterWrapper>
    </>
  )
}

export const AttemptTestTopicListsActions = ({
  subjectListCount,
  timeDuration,
  onClick,
  sequenceNo,
  title
}: AttemptTestTopicListProsp): ReactElement => {
  const history = useHistory()
  const {
    student: {
      assessment: {
        attempt: { noofQuestions, duration, takeTest }
      }
    }
  } = strings
  return (
    <>
      <ChapterWrapper onClick={onClick}>
        <TopicWrapper>
          <ChapterNumber>{sequenceNo}</ChapterNumber>
          <CardTitle fontSize="18px">{title}</CardTitle>
          <SubtitleWrapper>
            <FlexWrapper noMargin noPadding>
              <CardSubtitle
                className="mt-2 text-muted"
                fontSize="12px"
                fontWeight="500"
              >
                {noofQuestions} : {subjectListCount}
              </CardSubtitle>
              <CardSubtitle
                className="mt-2 text-muted"
                fontSize="12px"
                fontWeight="500"
              >
                {duration} : {timeDuration}
              </CardSubtitle>
            </FlexWrapper>
          </SubtitleWrapper>
        </TopicWrapper>
        <div>
          <TakeTestButton
            variant="success"
            onClick={() => {
              history.push(ROUTES.TEST)
            }}
          >
            {takeTest}
          </TakeTestButton>
        </div>
      </ChapterWrapper>
    </>
  )
}
