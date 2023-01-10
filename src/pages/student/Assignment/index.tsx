import { ReactElement } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../components'
import strings from '../../../locale/en'
import CompleteAssingement from './CompletedAssignment/completedAssignment'
import NewAssignment from './NewAssignment'
import { TabWrapper } from './subcomponent'

const StudentAssignment = (): ReactElement => {
  const {
    student: {
      assignment: { title, completedAssignemnt, newAssignement }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <TabWrapper>
          <Tabs
            defaultActiveKey="newAssignement"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="newAssignement" title={newAssignement}>
              <NewAssignment />
            </Tab>
            <Tab eventKey="completeAssignment" title={completedAssignemnt}>
              <CompleteAssingement />
            </Tab>
          </Tabs>
        </TabWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default StudentAssignment
