import { ReactElement } from 'react'
import BackButton from '../BackButton'
import FlexWrapper from '../FlexWrapper'
import {
  BackButtonWrapper,
  CardSubtitle,
  CardTitle,
  SubjectIcon,
  SubjectWrapper
} from './subcomponents'
import { SubHeaderProps } from './typings'

const LearnModuleHeader = ({
  src,
  title,
  subTitle
}: SubHeaderProps): ReactElement => {
  return (
    <FlexWrapper noMargin noPadding hasBorder>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <SubjectIcon>
        <SubjectIcon.Image src={src} alt="subject-logo" />
      </SubjectIcon>
      <SubjectWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle className="mb-2">{subTitle}</CardSubtitle>
      </SubjectWrapper>
    </FlexWrapper>
  )
}

export default LearnModuleHeader
