import { ReactElement } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ActionButton,
  PageWrapper,
  FlexWrapper,
  SectionTitle,
  ContainerWrapper,
  CardWrapper,
  CardHeader,
  ToastMessage
} from '../../../components'
import strings from '../../../locale/en'
import { RootState } from '../../../redux/store'
import {
  resetError,
  resetStaffDetails
} from '../../../redux/userRegistration/action'
import { addNewStaff } from '../../../redux/userRegistration/api'
import StaffContactInfo from './ContactInfo'
import StaffDocument from './Document'
import StaffEducationQualfication from './EduQualfication'
import StaffPersonelInfo from './PersonalInfo'

const AddStaffDetails = (): ReactElement => {
  const { error } = useSelector(
    (state: RootState) => ({
      error: state.userRegistration.error
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const {
    users: {
      addnonTeacher,
      addTeacher: {
        contactInfo,
        personalInfo,
        educationalqul,
        docToBeSubmitted
      }
    },
    button: { save }
  } = strings
  return (
    <PageWrapper>
      <ToastMessage
        show={!!error}
        onCloseHandler={() => dispatch(resetError())}
        message={error}
      />
      <FlexWrapper noPadding>
        <SectionTitle title={addnonTeacher} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <CardWrapper>
          <CardHeader>{personalInfo}</CardHeader>
          <StaffPersonelInfo />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{contactInfo}</CardHeader>
          <StaffContactInfo />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{educationalqul}</CardHeader>
          <StaffEducationQualfication />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{docToBeSubmitted}</CardHeader>
          <StaffDocument />
        </CardWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton
            onClick={() => {
              dispatch(addNewStaff())
              dispatch(resetStaffDetails())
            }}
          >
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddStaffDetails
