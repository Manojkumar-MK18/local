import { ReactElement } from 'react'
import styled from 'styled-components'
import { FlexWrapper, PageWrapper } from '../../../../components'
import { colors } from '../../../../const/theme'
import fonts, { weight } from '../../../../const/fonts'

interface Props {
  hasPadding?: boolean
  font?: string
  fontWeight?: string
  width?: string
  hasBorder?: boolean
}

export const ReceiptLogoWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 150px;
  height: 110px;
`

export const ReceiptLogo = styled.img`
  margin: 0 auto;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: 15px;
`

export const Border = styled.div`
  border-bottom: 1px dotted gray;
  margin: 5px;
`
export const Bold = styled.b<Props>`
  padding-left: ${({ hasPadding }) => (hasPadding ? '30px' : '0')};
`

export const Text = styled.h3<Props>`
  color: ${colors.black};
  font-size: ${({ font }) => (font ? font : `${fonts.xLarge}px`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : weight.medium)};
  width: ${({ width }) => (width ? width : null)};
  text-align: center;
  padding: ${({ hasPadding }) => (hasPadding ? '8px' : '0')};
  ${({ hasBorder, theme }) =>
    hasBorder && `border-bottom: 1px solid ${theme.border}`}
`

interface FeesProps {
  handleYear: string | any
  handleClass: string | any
  handleName: string | any
  handleAdmNo: string | any
  handleBranch: string | any
  handleBatch: string | any
}

export const FeeAction = ({
  handleAdmNo,
  handleClass,
  handleName,
  handleYear,
  handleBatch,
  handleBranch
}: FeesProps): ReactElement => {
  return (
    <PageWrapper>
      <FlexWrapper
        justifyContent="space-between"
        noPadding
        noMargin
        height={30}
      >
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          Year:<Bold> {handleYear}</Bold>
        </Text>
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          Name:<Bold> {handleName}</Bold>
        </Text>
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          AdmissionNo:<Bold> {handleAdmNo}</Bold>
        </Text>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between" noPadding height={40}>
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          Course:<Bold> {handleClass}</Bold>
        </Text>
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          Branch:<Bold> {handleBranch}</Bold>
        </Text>
        <Text width={'250px'} color={colors.black} font={`${fonts.medium}px`}>
          Batch:<Bold> {handleBatch}</Bold>
        </Text>
      </FlexWrapper>
    </PageWrapper>
  )
}

interface FeeTableProps {
  handleAmount: number | any
  handleConcession: number | any
  handlePaidAmount: number | any
  handleDue: number | any
}

const FeeWrapper = styled.div`
  margin-left: auto;
  align-items: flex-end;
  text-align: end;
  width: 35%;
`

export const FeeFooter = ({
  handleAmount,
  handleConcession,
  handleDue,
  handlePaidAmount
}: FeeTableProps): ReactElement => {
  return (
    <PageWrapper>
      <FeeWrapper>
        <Text
          color={colors.black}
          font={`${fonts.medium}px`}
          hasBorder
          hasPadding
        >
          Total Amount: <Bold hasPadding>₹ {handleAmount}</Bold>
        </Text>
        <Text
          color={colors.black}
          font={`${fonts.medium}px`}
          hasBorder
          hasPadding
        >
          Concession:<Bold hasPadding>₹{handleConcession}</Bold>
        </Text>
        <Text
          color={colors.black}
          font={`${fonts.medium}px`}
          hasBorder
          hasPadding
        >
          Amount Paid:<Bold hasPadding>₹{handlePaidAmount}</Bold>
        </Text>
        <Text
          color={colors.black}
          font={`${fonts.medium}px`}
          hasBorder
          hasPadding
        >
          Total Due:<Bold hasPadding>₹{handleDue}</Bold>
        </Text>
      </FeeWrapper>
    </PageWrapper>
  )
}
