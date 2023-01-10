import { ReactElement } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import strings from '../../../../locale/en'
import { InstituteProps } from '../../../../redux/institute/types'
import { RootState } from '../../../../redux/store'
import { DetailsData, DetailsTitle, DetailsWrapper } from '../subcomponents'

const ViewInstitute = (): ReactElement => {
  const { SelectedInstitutes } = useSelector(
    (state: RootState) => ({
      SelectedInstitutes: state.institute.addInstitutesPayload as InstituteProps
    }),
    shallowEqual
  )
  console.log(SelectedInstitutes)
  const {
    institute: { viewInstitute }
  } = strings

  const {
    name,
    institute_id,
    email,
    contact_no,
    expiry_date,
    state,
    nonteacher_limit,
    teacher_limit,
    question_limit,
    area,
    address,
    city,
    branches,
    status,
    student_limit
  } = SelectedInstitutes
  return (
    <PageWrapper>
      <FlexWrapper noPadding justifyContent="space-between">
        <SectionTitle title={viewInstitute} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <FlexWrapper noMargin justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>Institute Name</DetailsTitle>
            <DetailsData>{name}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Institute Id</DetailsTitle>
            <DetailsData>{institute_id}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Email</DetailsTitle>
            <DetailsData>{email}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Contact Number</DetailsTitle>
            <DetailsData>{contact_no}</DetailsData>
          </DetailsWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>Student Limit</DetailsTitle>
            <DetailsData>{student_limit}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Non-Teacher Limit</DetailsTitle>
            <DetailsData>{nonteacher_limit}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Teacher Limit</DetailsTitle>
            <DetailsData>{teacher_limit}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Question Limit</DetailsTitle>
            <DetailsData>{question_limit}</DetailsData>
          </DetailsWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>Expiry Date</DetailsTitle>
            <DetailsData>{expiry_date}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Number of Branch</DetailsTitle>
            <DetailsData>{branches.length}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Status</DetailsTitle>
            <DetailsData>{status}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Address</DetailsTitle>
            <DetailsData>{address}</DetailsData>
          </DetailsWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>Area</DetailsTitle>
            <DetailsData>{area}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>City</DetailsTitle>
            <DetailsData>{city}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>State</DetailsTitle>
            <DetailsData>{state}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle></DetailsTitle>
            <DetailsData></DetailsData>
          </DetailsWrapper>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default ViewInstitute
