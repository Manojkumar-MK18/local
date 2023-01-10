import { ReactElement } from 'react'
import Timer from '../../../../components/Timer'
import { colors } from '../../../../const/theme'
import { H2 } from '../../../../typography'
import { QuestionProps } from './const'
import { HeaderWrapper } from './subcomponents'

export const determineButtonVariant = (qtn: QuestionProps) => {
  const variantReview = qtn?.isMarkedForReview ? 'warning' : 'outline-danger'
  const variantAnswered = qtn?.selectedAnswer
  const variants = variantAnswered ? 'success' : variantReview
  return variants
}

interface HeaderProps {
  titleName: string
  duration: any
}

const Header = ({ titleName, duration }: HeaderProps): ReactElement => {
  return (
    <HeaderWrapper>
      {titleName && (
        <H2 fontWeight="700" font="20px" color={`${colors.black}`}>
          {titleName}{' '}
        </H2>
      )}
      <Timer duration={duration} />
    </HeaderWrapper>
  )
}

export default Header
