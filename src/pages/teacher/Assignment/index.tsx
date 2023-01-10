import { ReactElement } from 'react'
import {
  ContainerWrapper,
  FlexWrapper,
  SectionTitle
} from '../../../components'
import {
  BackButtonWrapper,
  CardTitle,
  PageWrapper
} from '../../student/Learn/Chapter/subcomponents'
import { TABS, TAB, SubjectWrapper } from './subcomponents'
import PostAssignment from './Tabs/postAssignment'
import ReviewAssignment from './Tabs/reviewAssignment'

const Assignment = (): ReactElement => {
  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <FlexWrapper noPadding noMargin hasBorder>
          <BackButtonWrapper>
            <SectionTitle title={''} />
          </BackButtonWrapper>
          <SubjectWrapper>
            <CardTitle>Assignment</CardTitle>
          </SubjectWrapper>
        </FlexWrapper>
        <TABS
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="1" title="Post Assignment">
            <PostAssignment />
          </TAB>
          <TAB eventKey="2" title="Review Assignment">
            <ReviewAssignment />
          </TAB>
        </TABS>
      </ContainerWrapper>
    </PageWrapper>
  )
}
export default Assignment
