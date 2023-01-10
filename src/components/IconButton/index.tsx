import { ReactElement } from 'react'
import fonts, { weight } from '../../const/fonts'
import { colors } from '../../const/theme'
import { H2, Small } from '../../typography'
import { IconWrapper, ChapterIconButton, ChapterImage } from './subcomponents'

export interface IconButtonProps {
  src: string
  title?: string
  onSubmit?: () => void
  isBold?: boolean
}

const IconChapterButton = ({
  onSubmit,
  src,
  title,
  isBold
}: IconButtonProps): ReactElement => {
  return (
    <IconWrapper>
      <ChapterIconButton variant="transparent" onClick={onSubmit}>
        <ChapterImage src={src} />
      </ChapterIconButton>
      {title && isBold ? (
        <H2
          font={`${fonts.medium}px`}
          color={`${colors.black}`}
          fontWeight={`${weight.xBold}`}
        >
          {title}
        </H2>
      ) : (
        <Small>{title}</Small>
      )}
    </IconWrapper>
  )
}

export default IconChapterButton
