import { ReactElement } from 'react'
import { colors } from '../../const/theme'
import { H2, Small } from '../../typography'
import BackButton from '../BackButton'
import Title from './subcomponents'

interface SectionTitleProps {
  title: string | any
  helpText?: string | any
  hasBorder?: boolean
  hasBackButton?: boolean
  fontSize?: string
}

const SectionTitle = ({
  helpText,
  title,
  hasBorder,
  hasBackButton,
  fontSize
}: SectionTitleProps): ReactElement => {
  return (
    <Title hasBorder={hasBorder}>
      {hasBackButton && <BackButton />}
      <H2 font={fontSize} color={colors.gray}>
        {title}
      </H2>
      {helpText && (
        <div>
          <Small isHelpText={true}>{helpText}</Small>
        </div>
      )}
    </Title>
  )
}

export default SectionTitle
