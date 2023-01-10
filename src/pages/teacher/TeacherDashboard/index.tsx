import { ReactElement } from 'react'
import { FlexWrapper, PageWrapper, SectionTitle } from '../../../components'

const TeacherDashboard = (): ReactElement => {
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={'Dashboard'} />
      </FlexWrapper>
    </PageWrapper>
  )
}

export default TeacherDashboard
