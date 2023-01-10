import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import { AttemptTestSubjectListsActions } from '../helper'

const AttemptTestSubjectList = (): ReactElement => {
  const history = useHistory()
  const showTitle =
    history.location?.pathname === ROUTES.ATTEMPT_TEST_CHAPTER_WISE
  const {
    student: {
      assessment: {
        attempt: { chapterWiseTest, subjectWiseTest }
      }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper>
        <SectionTitle
          title={showTitle ? chapterWiseTest : subjectWiseTest}
          hasBackButton
        />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <AttemptTestSubjectListsActions
          title={'Physics'}
          sequenceNo={1}
          chaptersTestCount={'5'}
          testAtempted={'3'}
          testPending={'2'}
          onClick={() => {
            history.push(ROUTES.ATTEMPT_TEST_TOPIC_LISTS)
          }}
        />
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AttemptTestSubjectList
