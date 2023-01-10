import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../components'
import ROUTES from '../../../const/routes'
import strings from '../../../locale/en'
import { TestButtons } from './subcomponent'

const CreateTest = (): ReactElement => {
  const history = useHistory()
  const {
    instituteAdmin: {
      assesment: { createTest }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={createTest} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin justifyContent="space-between">
          <TestButtons
            onClick={() => {
              history.push(ROUTES.TEST_SETTING)
            }}
          >
            NEET Mock Test
          </TestButtons>
          <TestButtons>UPSC Mock Tets</TestButtons>
          <TestButtons>NEET Subject Wise</TestButtons>
          <TestButtons>SSC Test 1</TestButtons>
          <TestButtons>IBPS Test One</TestButtons>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default CreateTest
