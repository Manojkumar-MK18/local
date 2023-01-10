/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  PageWrapper,
  ContainerWrapper,
  FlexWrapper,
  LearnModuleHeader
} from '../../../components'
import { getSubjectLogo } from '../../../helpers'
import { RootState } from '../../../redux/store'
import {
  ChapterNumber,
  CardSubtitle,
  CardTitle,
  ChapterWrapper,
  SubtitleWrapper
} from '../../student/Assesment/subcomponents'
import { HeaderWrapper } from '../../student/Learn/Chapter/subcomponents'

const LocalChapterList = () => {
  const { selectedSubjectId, getLoaclSubjectLists } = useSelector(
    (state: RootState) => ({
      selectedSubjectId: state.learn.selectedSubjectId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )

  console.log(selectedSubjectId)

  const [filterData] = getLoaclSubjectLists?.Subjects?.filter(
    (list: any, index: any) => list?.SubjectId === selectedSubjectId
  )

  console.log(filterData)

  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${filterData?.SubjectName}`
              })}
              title={filterData?.SubjectName}
            />
          </div>
          {/* <DropDownWrapper>
              <DropdownList
                defaultValue="Topic"
                data={['Topic', 'Session']}
                onChange={(value: any) => setState(value)}
              />
            </DropDownWrapper> */}
        </HeaderWrapper>

        <>
          {filterData?.Chapters?.map((item: any, index: any) => (
            <ChapterWrapper key={index} onClick={() => {}}>
              <ChapterNumber>{index + 1}</ChapterNumber>
              <CardTitle fontSize="18px">{item.ChapterName}</CardTitle>
              <SubtitleWrapper>
                <FlexWrapper noMargin noPadding>
                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                  >
                    {item?.Topics?.map((dd: any) => dd?.Material.length).reduce(
                      (sum: any, cur: any) => Number(sum) + Number(cur),
                      0
                    )}{' '}
                    Videos
                  </CardSubtitle>

                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                    style={{ marginLeft: '2%' }}
                  >
                    {'0'} Sessions
                  </CardSubtitle>
                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                    style={{ marginLeft: '2%' }}
                  >
                    {'0'} Study Materials
                  </CardSubtitle>
                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                    style={{ marginLeft: '2%' }}
                  >
                    {'0'} Practice Exercise
                  </CardSubtitle>
                </FlexWrapper>
              </SubtitleWrapper>
            </ChapterWrapper>
          ))}
        </>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LocalChapterList
