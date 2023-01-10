import { ReactElement } from 'react'
import {
  Cards,
  CardsBody,
  CardsImage,
  CardsTitle,
  CardTextWrapper
} from './subcomponents'
import { CountProps } from './types'

const DashboardCount = ({ title, count, src }: CountProps): ReactElement => {
  return (
    <Cards>
      <CardTextWrapper>
        <CardsTitle>{title}</CardsTitle>
        <CardsBody>{count}</CardsBody>
      </CardTextWrapper>
      <CardsImage src={src} />
    </Cards>
  )
}

export default DashboardCount
