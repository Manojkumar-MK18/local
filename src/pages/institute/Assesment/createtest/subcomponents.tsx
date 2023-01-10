import styled from 'styled-components'
import { FlexWrapper } from '../../../../components'
import fonts, { weight } from '../../../../const/fonts'
import { colors } from '../../../../const/theme'
import strings from '../../../../locale/en'
import { Props, CreateTestProps } from './typings'

export const TestWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const Text = styled.h3<Props>`
  color: ${colors.black};
  font-size: ${fonts.medium}px;
  font-weight: ${weight.medium};
  width: ${({ width }) => (width ? width : null)};
  text-align: center;
  margin-right: ${({ margin }) => (margin ? margin : '0')};
`

const CreateTestActions = ({
  studentTracking,
  proctoring,
  questions,
  instruction,
  noOfTest
}: CreateTestProps) => {
  return (
    <TestWrapper>
      <FlexWrapper justifyContent="space-between" height={30}>
        <Text>
          {strings.instituteAdmin.assesment.instructions}: <b>{instruction}</b>
        </Text>
        <Text>
          {strings.instituteAdmin.assesment.instructions}: <b>{instruction}</b>
        </Text>
        <Text>
          {strings.instituteAdmin.assesment.noOfTestCreated}: <b>{noOfTest}</b>
        </Text>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <Text>
          {strings.instituteAdmin.assesment.npOfQuestionsd}: <b>{questions}</b>
        </Text>
        <Text margin="55px">
          {strings.instituteAdmin.assesment.studentsTracking}:{' '}
          <b>{studentTracking}</b>
        </Text>
        <Text margin="45px">
          {strings.instituteAdmin.assesment.proctoring}: <b>{proctoring}</b>
        </Text>
      </FlexWrapper>
    </TestWrapper>
  )
}

export default CreateTestActions

export const QuestionWrapper = styled.div`
  display: flex;
  text-align: center;
  margin: 10px;
  h5 {
    font-size: ${fonts.medium}px;
  }
`
