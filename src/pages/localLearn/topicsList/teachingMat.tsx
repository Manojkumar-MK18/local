/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  PageWrapper,
  FlexWrapper,
  ContainerWrapper,
  LearnModuleHeader,
  IconChapterButton
} from '../../../components'
import { getSubjectLogo } from '../../../helpers'
import { RootState } from '../../../redux/store'
import {
  CardSubtitle,
  CardTitle,
  ChapterNumber,
  HeaderWrapper,
  SubtitleWrapper
} from '../../student/Learn/Chapter/subcomponents'
import {
  TABS,
  TAB,
  MaterialWrapper
} from '../../student/Learn/Materials/subcomponent'
import { ChapterWrapper } from '../../student/Learn/subcomponent'
import pdfIcon from '../../../assets/pdf-icon.png'

const LocalTeachingTopicList = () => {
  const {
    selectedChapterId,
    getLoaclSubjectLists,
    selectedSessionName,
    selectedSessionId
  } = useSelector(
    (state: RootState) => ({
      selectedChapterId: state.learn.selectedChapterId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any,
      selectedSessionName: state.learn.selectedSessionName,
      selectedSessionId: state.learn.selectedSessionId
    }),
    shallowEqual
  )

  const [filterData] = getLoaclSubjectLists?.Subjects?.map((list: any) =>
    list?.Chapters?.map((d: any) =>
      d?.Session?.filter((d: any) => d?.SessionId === selectedSessionId)
    )
  )

  const [finalFilter] = filterData?.filter((dd: any) => dd.length)

  console.log(finalFilter)
  console.log(selectedSessionId)
  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${selectedSessionName}`
              })}
              title={selectedSessionName}
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
          defaultActiveKey="mindmap"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="mindmap" title="PPTX">
            <MaterialWrapper>
              {finalFilter?.map((li: any, i: any) =>
                li.TeachingMaterial?.PPTX?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.TeachingMaterialName}
                    src={pdfIcon}
                    onSubmit={() => {}}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="notes" title="Solutions">
            <MaterialWrapper>
              {finalFilter?.map((li: any) =>
                li.TeachingMaterial?.Solution?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.TeachingMaterialName}
                    src={pdfIcon}
                    onSubmit={() => {}}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
        </TABS>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LocalTeachingTopicList
