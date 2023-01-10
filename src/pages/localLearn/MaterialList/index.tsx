/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  PageWrapper,
  LearnModuleHeader,
  FlexWrapper,
  ContainerWrapper
} from '../../../components'
import { getSubjectLogo } from '../../../helpers'
import { RootState } from '../../../redux/store'
import {
  CardSubtitle,
  HeaderWrapper,
  ChapterNumber,
  SubtitleWrapper,
  CardTitle
} from '../../student/Learn/Chapter/subcomponents'
import { ChapterWrapper } from '../../student/Learn/subcomponent'

const LocalMaterial = () => {
  const { selectedChapterId, getLoaclSubjectLists } = useSelector(
    (state: RootState) => ({
      selectedChapterId: state.learn.selectedChapterId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )

  const [filterData] = getLoaclSubjectLists?.Subjects?.map((list: any) =>
    list?.Chapters?.filter((d: any) => d?.ChapterID === selectedChapterId)
  )
  console.log(filterData[0]?.Session)
  console.log(selectedChapterId)
  console.log('====================================')
  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${filterData?.SessionName}`
              })}
              title={filterData?.SessionName}
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
          {filterData[0]?.Session?.map((item: any, index: any) => (
            <ChapterWrapper key={index} onClick={() => {}}>
              <ChapterNumber>{index + 1}</ChapterNumber>
              <CardTitle fontSize="18px">{item.SessionName}</CardTitle>
              <SubtitleWrapper>
                <FlexWrapper noMargin noPadding>
                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                  >
                    {item?.Material?.length} Videos
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

export default LocalMaterial
