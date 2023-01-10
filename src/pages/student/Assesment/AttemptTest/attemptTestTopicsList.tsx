import React, { ReactElement } from 'react'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import { AttemptTestTopicListsActions } from '../helper'

const AttemptTestTopicList = (): ReactElement => {
  return (
    <PageWrapper>
      <FlexWrapper>
        <SectionTitle title={'sv'} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <AttemptTestTopicListsActions
          subjectListCount={'34'}
          timeDuration={'33'}
          title={'dfsd'}
          sequenceNo={1}
          onClick={() => {}}
        />
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AttemptTestTopicList
