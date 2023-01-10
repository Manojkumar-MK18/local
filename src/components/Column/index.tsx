import { ReactElement } from 'react'
import FlexWrapper from '../FlexWrapper'
import { Large, Small } from '../../typography'
import ColumnProps from './typings'
import { colors } from '../../const/theme'

const Column = ({ keyName, value, children }: ColumnProps): ReactElement => {
  return (
    <FlexWrapper noPadding>
      <Large>{`${keyName}: `}</Large>
      <Small hasPadding color={colors.gray}>
        {value}
        {children}
      </Small>
    </FlexWrapper>
  )
}

export default Column
