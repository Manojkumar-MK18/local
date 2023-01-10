import { ReactElement } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import strings from '../../../../locale/en'
import { addBranchProps } from '../../../../redux/branch/types'
import { RootState } from '../../../../redux/store'
import {
  DetailsData,
  DetailsTitle,
  DetailsWrapper
} from '../../Institutes/subcomponents'

const ViewBranch = (): ReactElement => {
  const { SelectedBranch } = useSelector(
    (state: RootState) => ({
      SelectedBranch: state.branch.addBranchesPayload as addBranchProps
    }),
    shallowEqual
  )

  const {
    branch: { viewBranch }
  } = strings

  const {
    name,
    branch_id,
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
    student_limit,
    batch,
    pincode
  } = SelectedBranch
  return (
    <PageWrapper>
      <FlexWrapper noPadding justifyContent="space-between">
        <SectionTitle title={viewBranch} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <FlexWrapper noMargin justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>Branch Name</DetailsTitle>
            <DetailsData>{name}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Branch Id</DetailsTitle>
            <DetailsData>{branch_id}</DetailsData>
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
            <DetailsTitle>Number of Batch</DetailsTitle>
            <DetailsData>{batch.length}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Address</DetailsTitle>
            <DetailsData>{address}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Area</DetailsTitle>
            <DetailsData>{area}</DetailsData>
          </DetailsWrapper>
        </FlexWrapper>
        <FlexWrapper justifyContent="space-around">
          <DetailsWrapper>
            <DetailsTitle>City</DetailsTitle>
            <DetailsData>{city}</DetailsData>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsTitle>Pincode</DetailsTitle>
            <DetailsData>{pincode}</DetailsData>
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

export default ViewBranch
