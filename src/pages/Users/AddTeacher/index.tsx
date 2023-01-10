import { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  resetTeacherDetails
} from '../../../redux/userRegistration/action'
import { addNewTeacher } from '../../../redux/userRegistration/api'
import TeacherContactInfo from './ContactInfo'
import TeacherDocument from './Document'
import TeacherEducationQualfication from './EduQualfication'
import TeacherPersonelInfo from './PersonalInfo'

const AddTeacherDetails = (): ReactElement => {
  const { error } = useSelector((state: RootState) => ({
    error: state.userRegistration.error
  }))
  const dispatch = useDispatch()
  const {
    users: {
      addTeacher: {
        title,
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
        <SectionTitle title={title} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <CardWrapper>
          <CardHeader>{personalInfo}</CardHeader>
          <TeacherPersonelInfo />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{contactInfo}</CardHeader>
          <TeacherContactInfo />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{educationalqul}</CardHeader>
          <TeacherEducationQualfication />
        </CardWrapper>
        <CardWrapper>
          <CardHeader>{docToBeSubmitted}</CardHeader>
          <TeacherDocument />
        </CardWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton
            onClick={() => {
              dispatch(addNewTeacher())
              dispatch(resetTeacherDetails())
            }}
          >
            {save}
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddTeacherDetails
