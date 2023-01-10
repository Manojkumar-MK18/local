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
import { TAB, TABS } from '../../teacher/Assignment/subcomponents'

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
        <TABS
          defaultActiveKey="material"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="material" title="Material">
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
                        {item?.Material?.MindMap?.length} MindMap
                      </CardSubtitle>

                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {item?.Material?.Notes?.length} Notes
                      </CardSubtitle>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {item?.Material?.OthersVideos?.length} OthersVideos
                      </CardSubtitle>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {item?.Material?.Video?.length} Video
                      </CardSubtitle>
                    </FlexWrapper>
                  </SubtitleWrapper>
                </ChapterWrapper>
              ))}
            </>
          </TAB>
          <TAB eventKey="tmaterial" title="TeachingMaterial">
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
                        {item?.TeachingMaterial?.PPTX?.length} PPTX
                      </CardSubtitle>

                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {item?.TeachingMaterial?.Solution?.length}Solution
                      </CardSubtitle>
                    </FlexWrapper>
                  </SubtitleWrapper>
                </ChapterWrapper>
              ))}
            </>
          </TAB>
        </TABS>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LocalMaterial
