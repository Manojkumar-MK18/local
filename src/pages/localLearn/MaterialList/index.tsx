/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  PageWrapper,
  LearnModuleHeader,
  FlexWrapper,
  ContainerWrapper
} from '../../../components'
import ROUTES from '../../../const/routes'
import { getSubjectLogo } from '../../../helpers'
import {
  UpdateSessionId,
  updateSessionName
} from '../../../redux/learn/actions'
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
  const { selectedChapterId, getLoaclSubjectLists, selectedChapterName } =
    useSelector(
      (state: RootState) => ({
        selectedChapterId: state.learn.selectedChapterId,
        selectedChapterName: state.learn.selectedChapterName,
        getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any
      }),
      shallowEqual
    )

  const history = useHistory()
  const dispatch = useDispatch()
  const filterData = getLoaclSubjectLists?.Subjects?.map((list: any) =>
    list?.Chapters?.filter((d: any) => d?.ChapterID === selectedChapterId)
  )

  const [finalFilter] = filterData?.filter((c: any) => c.length)

  return (
    <PageWrapper>
      <ContainerWrapper>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${selectedChapterName}`
              })}
              title={selectedChapterName}
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
              {finalFilter[0]?.Session?.map((item: any, index: any) => (
                <ChapterWrapper
                  key={index}
                  onClick={() => {
                    history.push(ROUTES.LOCAL_TOPIC_LIST)
                    dispatch(updateSessionName(item.SessionName))
                    dispatch(UpdateSessionId(item.SessionId))
                  }}
                >
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
              {finalFilter[0]?.Session?.map((item: any, index: any) => (
                <ChapterWrapper
                  key={index}
                  onClick={() => {
                    history.push(ROUTES.LOCAL_TEACHING_TOPIC_LIST)
                    dispatch(updateSessionName(item.SessionName))
                    dispatch(UpdateSessionId(item.SessionId))
                  }}
                >
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
