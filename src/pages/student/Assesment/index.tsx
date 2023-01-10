import { ReactElement } from 'react'
import {
  FlexWrapper,
  IconChapterButton,
  PageWrapper,
  SectionTitle
} from '../../../components'
import { colors } from '../../../const/theme'
import {
  AnalyticsWrapper,
  MeterWrapper,
  SpeedometerWarpper,
  TestAttemptContentWrapper,
  TestAttemptWrapper,
  Title,
  UpcommingTestContentWrapper,
  UpcommingTestWrapper
} from './subcomponents'
import ReactSpeedometer from 'react-d3-speedometer'
import { CustomDropdown } from '../Learn/subcomponent'
import { CustomSegmentLabelPosition, Transition } from './types'
import moment from 'moment'
import strings from '../../../locale/en'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../const/routes'
import { UpcommingTest } from './helper'

const Assessment = (): ReactElement => {
  const history = useHistory()
  const {
    student: {
      assessment: {
        title,
        attemptTest,
        attemptedTest,
        upcomingTets,
        placeholder: { testType }
      }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper justifyContent="space-between">
        <SectionTitle title={title} />
        <CustomDropdown
          dropdownList={[]}
          handleSelect={() => {}}
          placeholder={testType}
        />
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between" noMargin>
        <MeterWrapper>
          <SpeedometerWarpper>
            <ReactSpeedometer
              needleTransitionDuration={3333}
              needleTransition={Transition.easeElastic}
              needleColor={'#1000f5'}
              textColor={'#d8dee9'}
              needleHeightRatio={0.7}
              customSegmentStops={[0, 250, 750, 1000]}
              segmentColors={['#bc10cc', '#7d2585', '#55085C']}
              value={444}
              height={200}
              currentValueText={'OverAll Performance'}
              customSegmentLabels={[
                {
                  text: 'Good',
                  position: CustomSegmentLabelPosition.Outside,
                  color: `${colors.darkWine}`
                },
                {
                  text: 'Great',
                  position: CustomSegmentLabelPosition.Outside,
                  color: `${colors.darkWine}`
                },
                {
                  text: 'Awesome!',
                  position: CustomSegmentLabelPosition.Outside,
                  color: `${colors.darkWine}`
                }
              ]}
            />
          </SpeedometerWarpper>
        </MeterWrapper>
        <AnalyticsWrapper>Analytics</AnalyticsWrapper>
      </FlexWrapper>

      <FlexWrapper noMargin justifyContent="space-between">
        <TestAttemptWrapper>
          <Title>{attemptTest}</Title>
          <TestAttemptContentWrapper>
            <IconChapterButton
              src={'https://static.upmyranks.com/unnamed.png'}
              isBold
              title={'Subject Wise'}
              onSubmit={() => {
                history.push(ROUTES.ATTEMPT_TEST_SUBJECT_WISE)
              }}
            />
            <IconChapterButton
              isBold
              src={'https://static.upmyranks.com/test-icon-chapter.png'}
              title={'Chapter Wise'}
              onSubmit={() => {
                history.push(ROUTES.ATTEMPT_TEST_CHAPTER_WISE)
              }}
            />
            <IconChapterButton
              src={'https://static.upmyranks.com/unnamed.png'}
              isBold
              title={'Full length test'}
            />
            <IconChapterButton
              src={
                'https://static.upmyranks.com/test-icons-mock--upmyranks.png'
              }
              isBold
              title={'Mock Test'}
            />
          </TestAttemptContentWrapper>
        </TestAttemptWrapper>
        <UpcommingTestWrapper>
          <Title>{upcomingTets}</Title>
          <UpcommingTestContentWrapper>
            <UpcommingTest
              date={`${moment(new Date()).format('DD-MM-YYYY')} | ${moment(
                new Date()
              ).format('HH:MM:A')}`}
              subject={'CHEMISTRY'}
              attemptEvents={'Chapter Wise'}
              length={2}
            />
            <UpcommingTest
              date={`${moment(new Date()).format('DD-MM-YYYY')} | ${moment(
                new Date()
              ).format('HH:MM:A')}`}
              subject={'CHEMISTRY'}
              attemptEvents={'Chapter Wise'}
              length={2}
            />
            <UpcommingTest
              date={`${moment(new Date()).format('DD-MM-YYYY')} | ${moment(
                new Date()
              ).format('HH:MM:A')}`}
              subject={'CHEMISTRY'}
              attemptEvents={'Chapter Wise'}
              length={2}
            />
            <UpcommingTest
              date={`${moment(new Date()).format('DD-MM-YYYY')} | ${moment(
                new Date()
              ).format('HH:MM:A')}`}
              subject={'CHEMISTRY'}
              attemptEvents={'Chapter Wise'}
              length={2}
            />
            <UpcommingTest
              date={`${moment(new Date()).format('DD-MM-YYYY')} | ${moment(
                new Date()
              ).format('HH:MM:A')}`}
              subject={'CHEMISTRY'}
              length={1}
              attemptEvents={'Chapter Wise'}
            />
          </UpcommingTestContentWrapper>
        </UpcommingTestWrapper>
      </FlexWrapper>
      <FlexWrapper noMargin justifyContent="start">
        <TestAttemptWrapper>
          <Title>{attemptedTest}</Title>
          <TestAttemptContentWrapper>
            <IconChapterButton
              src={'https://static.upmyranks.com/unnamed.png'}
              isBold
              title={'Subject Wise'}
            />
            <IconChapterButton
              isBold
              src={'https://static.upmyranks.com/unnamed.png'}
              title={'Chapter Wise'}
            />
            <IconChapterButton
              src={'https://static.upmyranks.com/unnamed.png'}
              isBold
              title={'Full length test'}
            />
            <IconChapterButton
              src={
                'https://static.upmyranks.com/test-icons-mock--upmyranks.png'
              }
              isBold
              title={'Mock Test'}
            />
          </TestAttemptContentWrapper>
        </TestAttemptWrapper>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Assessment
